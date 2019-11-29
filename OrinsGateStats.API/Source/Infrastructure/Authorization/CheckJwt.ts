import { Request, Response, NextFunction } from 'express';
import { verify, sign } from 'jsonwebtoken';
import JwtSecret from './JwtSecret';

export const CheckJwt = (request: Request, response: Response, next: NextFunction) => {
    let token = <string>request.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    let jwtPayload;

    try {
        jwtPayload = <any>verify(token, JwtSecret);
        response.locals.jwtPayload = jwtPayload;
    } catch (error) {
        response.status(401).send();
        return;
    }

    const { PlayerID } = jwtPayload;
    const newToken = sign({ PlayerID }, JwtSecret, {
        expiresIn: '4h'
    });
    response.setHeader('token', newToken);

    next();
};