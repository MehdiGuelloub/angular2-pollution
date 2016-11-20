import { User } from '../user';

export class Comment {
	constructor(public owner: User, public commentDate: string, public body: string) {

	}
}
