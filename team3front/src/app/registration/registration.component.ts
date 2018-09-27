declare var require: any;
let RecordRTC = require('recordrtc/RecordRTC.min');
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import { Applicant } from '../applicant';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm, FormControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { ApplicantsService } from '../applicants.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({

  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  model = new Applicant();

  isLinear = true;
  firstFormGroup: FormGroup;  
  applicants : Applicant[] = [];


    

  private stream: MediaStream;
  private recordRTC: any;
  @ViewChild('video') video: any;

  constructor(private _formBuilder: FormBuilder, private applicantsService: ApplicantsService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
    }
    );

  }


  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    
    navigator.mediaDevices
      .getUserMedia({
        video: {
          
            width: 1280,
            height: 720
          
        }, audio: true
      })
      .then(this.successCallback.bind(this), 
      this.errorCallback.bind(this));


  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    
  }

  download() {
    this.recordRTC.save('video.webm');
  }

  saveApplicant(): void {
    this.model.video = '';
    this.model.birthdate=this.model.birthdate.toString();
    this.model.id =Number(this.model.id);
    console.log(this.model);
    this.applicantsService.addApplicant(this.model)
      .subscribe();
  }

  getApplicants(): void {
    this.applicantsService.getApplicants()
    .subscribe(applicants => this.applicants = applicants);
  }

}
