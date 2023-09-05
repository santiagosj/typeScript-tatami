import { Punto, PUNTO } from './modulos/Punto';
import Grupo, { defaultGroup } from './modulos/Grupo';

const punto = new Punto(1, 2);
console.log('punto', punto);
const grupo = new Grupo(1, 'CDL');
console.log('grupo', grupo);
console.log(PUNTO);
console.log(defaultGroup);

