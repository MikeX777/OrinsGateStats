import { Router } from 'express';
import { DependencyContainer } from 'tsyringe';
import { CharacterController } from './CharacterController';
import { PlayerController } from './PlayerController';

export default function ApplyControllers(dicontainer: DependencyContainer, router: Router) {
   dicontainer.resolve<CharacterController>(CharacterController);
   dicontainer.resolve<PlayerController>(PlayerController);
}
