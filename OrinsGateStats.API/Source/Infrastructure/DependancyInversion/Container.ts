import { container } from 'tsyringe';
import { PersonService } from '../../2.Services';


container.register('IPersonService', {
   useClass: PersonService 
});


export default { container };