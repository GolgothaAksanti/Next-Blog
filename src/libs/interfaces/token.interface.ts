export interface IToken {
    generate(payload: any, expiresIn: any): string | null;
    decode(token: string): any;
    //   extract(req: Request, res: Response): string;
  }