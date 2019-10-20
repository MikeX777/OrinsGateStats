import { Router } from 'express';
import { DependencyContainer } from 'tsyringe';
import { CharacterController } from './CharacterController';

export default function ApplyControllers(dicontainer: DependencyContainer, router: Router) {
   var characterController = dicontainer.resolve<CharacterController>(CharacterController);
}