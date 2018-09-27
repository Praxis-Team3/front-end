export class Survey {

    public id: number;
    constructor(
        public sessionDate: Date,
        public sessionType: string,
        public tutorName: string,
        public sessionContent: string,
        public sessionTime: string,
        public sessionResources: string,
        public knowledgeTopic: string,
        public abilityToShare: string,
        public tone: string,
        public dynamic:string,
        public solvedQuestions: string,
        public satisfactionLevel: string,
        public suggestion: string,
        
      
        
    ) {}
}