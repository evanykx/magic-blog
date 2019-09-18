import { describe, it } from 'mocha';
import { expect } from 'chai';
import Generator from '../../utils/entityGenerator';
import JwtUtil from '../../utils/jwtUtils';
import baseConfig from '../../config/base.config';
import jwt from 'jsonwebtoken';

describe('Test utils', () => {
    it('Test uuid to generate id string -> Idx()', () => {
        console.log(Generator.Idx());
    });
    it('Test jwt token encode', () => {
        let payload = {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            email: 'test'
        };
        let token = JwtUtil.encode(payload);
        console.log('jwt[encode] -> ' + token.toString());
        let data = JwtUtil.decode(token);
        if (data) {
            console.log('jwt[decode] -> ' , data);
        }        
    })
});