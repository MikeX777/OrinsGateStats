import { NextFunction, Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { environment } from '../.././Environment/environment';

export const CheckJwt = (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    let jwtPayload;

    try {
        jwtPayload = ( verify(token, environment.jwtSecret) as any);
        response.locals.jwtPayload = jwtPayload;
    } catch (error) {
        response.status(401).send();
        return;
    }

    const { PlayerID } = jwtPayload;
    const newToken = sign({ PlayerID }, environment.jwtSecret, {
        expiresIn: '4h',
    });
    response.setHeader('token', newToken);

    next();
};
