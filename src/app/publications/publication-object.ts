import { User } from '../user';

export class PublicationObject {
	constructor(private id:number, private description:string, private fileUrl:string, private user:User, private lat: number, private lng: number) {}

}
