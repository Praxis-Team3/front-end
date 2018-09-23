import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const applicants = [
            {
                _id: 1,
                name: 'José',
                lastname: 'Diaz',
                birthday: '02/04/1996',
                email: 'jofdiazdi@unal.edu.co',
                password: '12345',
                // need to add video
                status: 'pending',
            },
            {
                _id: 2,
                name: 'Carlos Miguel',
                lastname: 'Pinzon',
                birthday: '02/04/1996',
                email: 'cmpinzonh@unal.edu.co',
                password: '12345',
                // need to add video
                status: 'pending',
            },
            {
                _id: 3,
                name: 'José',
                lastname: 'Yepez',
                birthday: '02/04/1996',
                email: 'jdyepest@unal.edu.co',
                password: '12345',
                // need to add video
                status: 'pending',
            },
        ];
        return {applicants};
    }
}
