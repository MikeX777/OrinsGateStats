import { Router } from 'express';
import { DependencyContainer } from 'tsyringe';
import { CharacterController } from './CharacterController';
import { PlayerController } from './PlayerController';

export default function ApplyControllers(dicontainer: DependencyContainer, router: Router) {
   let characterController = dicontainer.resolve<CharacterController>(CharacterController);
   let playerController = dicontainer.resolve<PlayerController>(PlayerController);
}
