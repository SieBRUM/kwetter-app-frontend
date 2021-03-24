export interface IKweet {
    id: number;
    date: Date;
    userImageBase64: string;
    userName: string;
    userHandle: string;
    hasLiked: boolean;
    amountReplies: number;
    amountHeart: number;
    content: string;
}
