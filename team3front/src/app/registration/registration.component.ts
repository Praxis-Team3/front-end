declare var require: any;
// tslint:disable-next-line:prefer-const
let RecordRTC = require('recordrtc/RecordRTC.min');
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import { Applicant } from '../models/applicant';
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
  applicants: Applicant[] = [];




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
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    const video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    // tslint:disable-next-line:prefer-const
    let options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    const video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    // handle error here
  }

  processVideo(audioVideoWebMURL) {
    const video: HTMLVideoElement = this.video.nativeElement;
    const recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
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
    const recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    const stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());

  }

  download() {
    this.recordRTC.save('video.webm');
  }

  add(name, lastname, id, birthday, email, password): void {
    name = name.trim();
    lastname = lastname.trim();
    id = id.trim();
    if (!name) { return; }
    this.applicantsService.addApplicant({ names: name } as Applicant)
      .subscribe(applicant => {
        this.applicants.push(applicant);
      });
  }

  getApplicants(): void {
    this.applicantsService.getApplicants()
    .subscribe(applicants => this.applicants = applicants);
  }

}
