export class Survey {

    public id: number;
    constructor(
        public sessionDate: Date,
        public tutorName: string,
        public sessionType: string,
        public sessionContent: string,
        public sessionTime: string,
        public sessionResources: string,
        public knowledgeTopic: string,
        public abilityToShare: string,
        public dynamic:string,
        public solvedQuestions: string,
        public tone: string,
        public satisfactionLevel: string,
        public suggestions: string
      
        
    ) {}
}