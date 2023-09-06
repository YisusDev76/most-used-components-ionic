# most-used-components-ionic
Este es un proyecto el cual esta inspirado casi en su totalidad de la clase [Ionic & Capacitor for Building Native Mobile Apps – Full Course for Beginners  por Simmon Grimm](https://www.youtube.com/watch?v=K7ghUiXLef8&t). 

Mas que documentar este readme tiene como objetivo dejar apuntes sobre cada capitulo de la clase para que alguien o yo mismo en el futuro sepa buscar algunas cosas rapidaemente.

[TOC]

Ionic es un conjunto de componentes y utilidadesn para construir impresionantes apps buscando que tengan un aspectos como apps nativas tanto paran android como ios sin tener que hacer desarrollo nativo

Capacitor es una herramientas para desarrollar apps nativas que cumple 2 funciones priencipales, ayudarte a construir tu app nativas a traves de contenedores nativos para cada plataforma, y 2 ser el puente entre tu codigo web y los plugins de capacitor para conectarse alas funciones nativas del dispositivo.

##  Requisitos

* Angular 14 o superior
* Ionic
* Node
* Editor de codigo

## Cosas a considerar

1. En la clase el proyecto esta hecho con react pero yo lo hice con angular
2. Estoy usando [standalone components](https://angular.io/guide/standalone-components) que es una nueva filosofia para los componentes en angular, el cual simplifica el codigo al no tener que usar ngModules
3. Estoy usando node 18 y no se que tan compatible sea con versiones mas abajo
4. Las slides con swiper es algo que no realice en este proyecto ya que me han resultado ser bastante dificiles de implementar correctamente y traen muchos problemas , pero en un futuro si alguien más ve esto podria implementarlo

 ## Capitulo 1 - Requisitos previos

* Chrome
* VsCode y   extensiones escenciales (Color hightlight, image preview, path intellisense, auto rename tag, material icon theme, atom theme, ionic snpiped, etc)
* Tener instalado y configurado Git , un repo en gitHub y llave ssh (es opcional pero no obligatorio)
* Nvm y node
* Angular
* Android studio y confifgurado
* Extension de portatpapeles

## Capitulo 2 - Iniciando con Ionic y Capacitor

Lo primero es instalara la CLI de ionic en todo el sistema, para esto se usara el comando:

```bash
npm i -g @ionic/cli
```

Para iniciar un nuevo proyecto de ionic te posiscionas en la carpeta donde quieres guardar este proyecto o varios y escribes:

```bash
ionic start myApp blank --type angular
```

Despues de la instlacion nos posicionamos en la carpeta del proyecto y abrimos el editor de codigo con `code .`

Para ejecutar el proyecto que has creado simplemete escribe:
```bash
ionic serve
```

Pero antes de iniciar con la parte de dev, veremos como se puede contruir una app, para ello tambien usaremos otra herramienta llamada capacitor, este tambien es desarrollado por ionic, si has estado ya hace tiempo tambien habras escuchando de cordova; bueno capacitor al ser una herramienta para construir apps cross-plateform lo que permite es envolver la aplicacion web en un contendor nativo y luego deploy en Ios y android como una PWA. 

Cordova tambien hizo esto en el pasado. sin emebargo,  Capacitor tiene una filosofia un poco diferente y creo que capacitor es el camino a seguir en el futuro a medida de que más personas realmente se estan cambiando a este, sin mencionar que Ionic recomienda el uso de capacitor

Nota rapida: Capacitor no esta solo hecho para ionic, en realidad puede ser usadoreact  para cualquier proyecto web, por ejemplo  si tiene un proyecto de react o de angular puro, puedes instalara capacitor y utilizar sus herramientas para desarrollar tu app web en un contendor nativo de android o ios. por tanto no hay una conexion directa entre ionic y capacitor , solamente que estos trabajan muy bien juntos, pero como se dijo antes,  tambien podria funciona para codigo puro de react o de angular o de vue , etc.

Pero y entonces que ventajas tiene usar ionic?, bueno al usar ionic obtienes muchos componentes geniales, podrias pensar en ionic como los componentes chidos y en capacitor como la herramienta que en verdad crea tu app. Más adelante estarmos usando varios de estos componentes para desarrollar nuestra app.

Para empezar ahora si a desarrollar, primero integraremos capacitor en nuetro proyecto de ionic, para esto corremos por primera el sig comando en nuestro proyecto:

```bash
ionic build
```

este comando creara la primera salida de compilacion del proyecto en una carpeta del proyecto llamada `www` o `build` (dependiendo de tu conf del archivo angular.json)

Una vez completado este proceso, tendrás una versión compilada de tu aplicación que se puede servir en un servidor web y acceder a través de un navegador.

Depues de construir por primera vez tu app, lo segundo que tienes que hacer es agregar las plataformas con las cuales vas a trabajar, en este caso agregaremos ios y android con los siguientes comandos

```bash
ionic cap add ios
```

```bash
ionic cap add android
```

Al ejecutar este comando, Capacitor crea las carpetas y archivos necesarios para un proyecto nativo de iOS o Android. El comando `ionic cap add` solo se necesita una vez para añadir la plataforma al proyecto, a menos que se eliminen las carpetas de la plataforma y sea necesario volver a añadirlas.

Estas carpetas que se generaron son simplemenete proyectos nativos, asi que si tienes experiencia con el desarrollo en adroid o ios las puedes manipular.

Después de eso, no necesitas volver a ejecutar el comando `ionic cap add` para esa plataforma a menos que elimines las carpetas de la plataforma. Cada vez que hagas cambios en tu aplicación y quieras ver esos cambios en la plataforma nativa, simplemente necesitas ejecutar `ionic build` para construir tu aplicación, y luego `ionic capacitor copy` para copiar los archivos web a la carpeta específica de la plataforma.

Para poder abrir dicho proyecto, tendras que usar los comandos:

Si tienen una mac y xcode ya configurado usaras:

``` bash
cap open ios
```

Para proyectos en adroid (cabe mecionar que tienes que tener instalado y configuarado las variables de entorno para android studio):
```bash
cap open android
```

Antes de seguir debes de saber que existen 2 comandos que puedes ejecutar en esta parte: Ambos comandos, `ionic cap copy` y `ionic cap sync`, se utilizan en el flujo de trabajo de desarrollo de Ionic con Capacitor, pero tienen ligeras diferencias:

- `ionic cap copy` copia la versión web construida de tu aplicación (los archivos estáticos generados por `ionic build`) en el directorio de cada plataforma (iOS y/o Android). Sin embargo, este comando no actualiza los plugins de Capacitor.

```bash
ionic cap copy
```

- `ionic cap sync` hace lo mismo que `ionic cap copy`, pero además actualiza y sincroniza los plugins de Capacitor. Si has instalado un nuevo plugin o has actualizado un plugin, necesitarás ejecutar `ionic cap sync` para asegurarte de que estos cambios se reflejen en tu aplicación nativa.

```bash
ionic cap sync
```

### Flujo de pruebas y deploy en ios

Si ya hiciste todo lo anterior, configuraste tus variables de entorno para abrir xcode y el editor esta abierto con el proyecto; ahora puedes seleccionar entre diferentes dispositivos virtuales o tambien podrias conectar tu propio dispositivo, es recomendable usar el emulador si tienes un dispositivo de la marca bastante potente porque si es muy bueno.

Luego le das en ejecutar app y esperas unos 4 o 5 min y tendras el emulador y la app ya montada

### Flujo de pruebas y deploy en Android

Para android tambien podemos crear un dispositivo virtual, sin embargo tanto tienes que tener un equipo de gamma media alta como tambien debes de serber de configuraciones, sdk etc. Igual se recomienda usar mas tu propio dispositivo para esto.

Igual si quieres probar un emulador podrias usar el Google Pixel 3a con una api de nivel 24 o superior

Para ejecutar en un dispositivo fisico debes de tener habilitado el modo de desarrollador y tener activada la depuracion usb, despues de eso  ya en adroid studio deberia aparecerte el, o los dispositivos disponibles para ejecutar la app

### Estilos de las apps en plataformas

Al correr la app te daras cuentas de que a pesar de proceder de la misma fuente de codigo luce algo diferente, esto es porque ionic se adpta a la plataforma y la hara lucir como se ve una app en esa plataforma.

### Conclusiones de emepezar en ionic

Una vez que ya creaste tu proyecto , que lo ejecutas, y probaste en la app en tu navegador y quieres dar el paso a hacer pruebas en nativo, ya sea en emuladores o dispositivo nativo, el flujo de trabajo de pruebas se ve asi:

1. `ionic build`: construir tu aplicación web. Este comando se ejecuta cada que hagas cambios y quieres probar en nativo o exportar para la web.
2. `ionic cap add ios` o `ionic cap add android`: añadir la plataforma específica a tu proyecto (sólo la primera vez que añadas una plataforma) necesitar ejecutar el comando anterior la priemera vez para que este funcione.
3. `ionic cap sync`: copia los archivos web a la carpeta específica de la plataforma y actualiza y sincroniza los plugins.

Si no has hecho cambios en tus plugins, puedes usar `ionic cap copy` en lugar de `ionic cap sync` después de ejecutar `ionic build`. Pero si has añadido o actualizado plugins, deberías usar `ionic cap sync` para asegurarte de que estos cambios se apliquen en tu aplicación nativa.

Finalmente, para abrir tu aplicación en un IDE específico para continuar el desarrollo o iniciar el proceso de compilación, puedes utilizar los comandos `ionic cap open ios` para Xcode o `ionic cap open android` para Android Studio.

##  Capitulo 3 - Ejecuta y debuggea tu App

Como vimos en la seccion anterioir, todo este proceso de construccion, sincroizacion, ir a los studios es algo bastante engorroso y complicado, pero existira una mejor manera para hacer esto más fácil?. Si, si existe!!

Existe una livereload (recarga en vivo) en dispositivos, para esto debes ejecutar el sig comando:

```bash
ionic cap run (ios/android) --livereload --external --public-host=192.168.1.52
```

El comando `ionic cap run ios --livereload --external --public-host=192.168.1.52` es un comando de Ionic que se utiliza para ejecutar tu aplicación en un dispositivo o simulador y habilitar una serie de características de desarrollo útiles.

Aquí está lo que hace cada parte del comando:

- `ionic cap run ios`: Este comando básicamente construye tu aplicación y la ejecuta en un dispositivo o simulador de iOS.
- `--livereload`: Esta opción habilita la recarga en vivo de la aplicación. Esto significa que cuando haces cambios en tu código, estos cambios se reflejarán automáticamente en la aplicación que se está ejecutando en el dispositivo o simulador, sin necesidad de detener y reiniciar la aplicación.
- `--external`: Esta opción permite que la URL del servidor de desarrollo sea accesible desde dispositivos externos, lo que es útil si quieres probar tu aplicación en un dispositivo físico en lugar de un simulador.
- `--public-host=192.168.1.52`: Esta opción especifica la dirección del host que se utilizará para la recarga en vivo y el servidor de desarrollo. Esto debe ser la dirección IP de tu máquina en tu red local. Esto es necesario si estás utilizando la opción `--external` y quieres que tu dispositivo físico pueda acceder al servidor de desarrollo.

Esto funciona porque capacitor por dentro hace que nativamente el dispositivo acceda a la url remota

En resumen, este comando te permite ejecutar tu aplicación en un dispositivo o simulador, ver los cambios en tiempo real mientras desarrollas y permitir que dispositivos externos accedan a tu servidor de desarrollo.

**Nota importante** : cuando yo probe el comando de esta manera no funciono, la ip no me la agarraba, pero escribi el comando sin la ip y funcionó:

```bash
ionic cap run android --livereload --external --public-host
```

Esto es genial porque te permtira ahorrrar tiempo probando rapidamente tus cambios en tiempo real para multiples dispositivos

### Debuggin en las 3 plataformas

El desarrollar asi esta super bien, pero que pasa cuando tienen errores y quieres ver que esta pasando, porque podria haber problemas en esten pasando en nativo y no nos demos cuenta, bueno para esto debes conocer las herramientad de debbugueo

Para la web puedes usar la depuracion habitual del navegador a la cual accedes con las teclas:
`ctrl` + `shift` + `i`

Para la depuracion en ios hay 2 formas, puedes usar Xcode , si ejecutas la app a traves de este ide veras, lo malo de esta opcion es que muestras muchos mas mensajes, asi que una mejor manera de hacer esto es usar Safari, en la parte de arriba puedes presionar la opcion de ***desarrollar*** y luego seleccionar tu dispositivo. 

Si no ves tu dispositivo o no ves la app para inspeccionar, es porque tienes una opcion activada, para esto de a la **configuración del simulador o del dispositivo**,  selecciona **safari** , ve hasta abajo y selecciona avandados(opciones avanzadas) y activa  el toggle de **JavaScript** (apagalo y prendelo).

Si horas seleccionas la app y desde el menu de desarrollo deberias que tu app abre una nueva ventana de inspección de consola para Safari y ya ahi aparecera la consola.

**Nota**: Para esta parte de ios no se si se necesita tener ya la cuenta de iosDeveloper.

### Debbugin en Android

Para android se puede usar Chrome, para esto escribiras en la barra de arriba:
```html
chrome://isnpect
```

Cuando presiones enter deberia con suerte llevarte a una pagina de debugeo donde te debe aparecer tu applicacion webview con tu dispositivo que la esta corriendo. Despues simplemente presiona: *inspect* y tambien abrira una ventana con la consola y un previsalizador (que se puede desactivar). Cabe mencionar que tambien puedes recargar la app desde aqui.

una vez que tenemos esto, tenemos el primer punto de control:

* Tenemos instalado ionic
* Creamos nuestro primer proyecto de ionic
* La ejecutamos en el navegador con livereload
* Implementacion de la app de manera nativa en IOS y Android
* Entendimos como depurar nuestras apps que utilizan el navegador

Despues de esto ahora si podemos empezar a desarrollar una app en ionic.

## Capitulo 4 - Building a login Screen

Como la app que estan construyendo esta hecha en react, no estoy siguiendo este tuto paso a paso, pero que sepan que, al final de la seccion habra links a videos que se pueden visitar para cubrir la sección con ionic - angular.

### css Utilities

Ionic Framework proporciona un conjunto de clases de utilidad CSS que se pueden usar en cualquier elemento para modificar el texto, la ubicación del elemento o ajustar el relleno y el margen. Aqui solo incluire unas pocas a modo de ejemplo pero puedes visitar el [link](https://ionicframework.com/docs/layout/css-utilities) para mas detalles:

#### Text Alignment (Text Modification)

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```



| Class               | Style Rule            | Description                                                  |
| ------------------- | --------------------- | :----------------------------------------------------------- |
| `.ion-text-left`    | `text-align: left`    | El contenido en línea se alinea con el borde izquierdo del cuadro de línea. |
| `.ion-text-right`   | `text-align: right`   | El contenido en línea se alinea con el borde derecho del cuadro de línea. |
| `.ion-text-start`   | `text-align: start`   | Lo mismo que `text-left` si la dirección es de izquierda a derecha y `text-right` si la dirección es de derecha a izquierda. |
| `.ion-text-end`     | `text-align: end`     | Lo mismo que `text-right` si la dirección es de izquierda a derecha y `text-left` si la dirección es de derecha a izquierda. |
| `.ion-text-center`  | `text-align: center`  | Los contenidos en línea se centran dentro del cuadro de línea. |
| `.ion-text-justify` | `text-align: justify` | Los contenidos en línea están justificados. El texto debe estar espaciado para alinear sus bordes izquierdo y derecho con los bordes izquierdo y derecho del cuadro de línea, excepto la última línea. |
| `.ion-text-wrap`    | `white-space: normal` | El texto se ajusta automáticamente a la siguiente línea cuando alcanza el final de la línea o el borde del contenedor. Imagina que estás escribiendo una carta en una hoja de papel, cuando llegas al final de la línea, naturalmente bajas a la línea siguiente para continuar escribiendo. Eso es similar al comportamiento del "wrap". |
| `.ion-text-nowrap`  | `white-space: nowrap` | En este caso, el texto no se ajusta automáticamente al borde del contenedor. Sigue en una línea única, sin importar cuánto se extienda. Es como si estuvieras escribiendo en una cinta infinita, sin necesidad de ir a la siguiente línea. |

####  Element Padding (Content Space)

El área de margen extiende el área del borde con un área vacía que se usa para separar el elemento de sus vecinos.

La cantidad predeterminada de margen que se aplicará es de 16 px y se establece mediante la variable --ion-margin. Consulte la sección Variables CSS para obtener más información sobre cómo cambiar estos valores.

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>margin</div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>margin-top</div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>margin-start</div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>margin-end</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>margin-bottom</div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>margin-vertical</div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>margin-horizontal</div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>no-margin</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                    | Style Rule            | Description                           |
| ------------------------ | --------------------- | ------------------------------------- |
| `.ion-margin`            | `margin: 16px`        | Applies margin to all sides.          |
| `.ion-margin-top`        | `margin-top: 16px`    | Applies margin to the top.            |
| `.ion-margin-start`      | `margin-start: 16px`  | Applies margin to the left.           |
| `.ion-margin-end`        | `margin-end: 16px`    | Aplica margen a la derecha.           |
| `.ion-margin-bottom`     | `margin-bottom: 16px` | Applies margin to the bottom.         |
| `.ion-margin-vertical`   | `margin: 16px 0`      | Applies margin to the top and bottom. |
| `.ion-margin-horizontal` | `margin: 0 16px`      | Applies margin to the left and right. |
| `.ion-no-margin`         | `margin: 0`           | Applies no margin to all sides.       |



##  Capitulo 5 - Responsive UI with Ionic Grid

La interfaz de usuario (UI) receptiva es esencial en la actualidad debido a la variedad de dispositivos y tamaños de pantalla que los usuarios tienen. Ionic es un popular framework para el desarrollo de aplicaciones móviles híbridas, y uno de sus componentes clave es el sistema de cuadrícula (grid), que ayuda a crear una UI adaptable y elegante. Veamos cómo puedes trabajar con la cuadrícula de Ionic para lograr una UI receptiva:

Queremos asegurarnos de que no luzca el icono muy grande en una web, asi que para hacer esto se usaran grid components, tambien se podria escribir media queries pero tambien existe el sistema de grid de ionic, sistema que podemos usar en las apps nativas y esta optimizado para esto.

Pasos para hacer esto:

1. Agregar un padding al `<IonContent>`

   ```html
   <ion-content [fullscreen]="true" class="ion-padding">
   ```

2. luego lo mejor es envolver todo el contenido del formulario y la imagen en un ion-grid , para que pueda tener una fila de 12 columnas individuales

   ```html
     <ion-grid fixed>
       <ion-row class="ion-justify-content-center">
         <ion-col size="12" sizeMd="8" sizeLg="6" sizeXl="4">
           <div class="ion-text-center ion-padding">
             <img src="../../assets/icon_1.png" alt="FCC" width="50%">
           </div>
         </ion-col>
       </ion-row>
     </ion-grid>
   ```

   ### `<ion-col size="12" sizeMd="8" sizeLg="6" sizeXl="4">`

   Esta es una definición de columna con varios atributos que definen su tamaño en diferentes dispositivos:

   - `size="12"`: En dispositivos pequeños (por debajo del punto de interrupción para tamaño mediano), la columna ocupará todo el ancho disponible, ya que la cuadrícula tiene 12 columnas en total.
   - `sizeMd="8"`: En dispositivos de tamaño mediano, la columna ocupará 8 de las 12 columnas disponibles, es decir, 2/3 del ancho total.
   - `sizeLg="6"`: En dispositivos de tamaño grande, la columna ocupará 6 de las 12 columnas disponibles, es decir, la mitad del ancho total.
   - `sizeXl="4"`: En dispositivos extra grandes, la columna ocupará 4 de las 12 columnas disponibles, es decir, 1/3 del ancho total.

   Utilizar el atributo `fixed` es útil si quieres asegurarte de que tu contenido no se estire demasiado en pantallas grandes, manteniendo un diseño más consistente y legible.

   ### `class="ion-justify-content-center"` en `<ion-row class="ion-justify-content-center">`

   Esta clase es especialmente útil si tienes columnas que no ocupan todo el ancho disponible de la cuadrícula, ya que asegura que estén centradas en la página.

3. Tambien es buena idea poner tu formulario dentro de un `ion-card` que a su vez lleva `ion-content` para tu formulario y que no se estire demasiado si esta haciendo el sitio web de computadora

En este punto ya deberias ser capaz de ingresar componentes de ionic en la pagina y saber usarlos a nivel basico. En la siguiente sección estarmos hablando sobre diseños:



## Capitulo 6 - Creating a Drawer Menu

En este capitulo veremos la implmentacion  tanto del menu en listas como de los tabs. 

Se explico como hacerlo en react pero igual ya hay un tuto de como hacerlo de angular.

## Capitulo 7. Building a TabBar

La tabBar es una una especie de seccion donde tienes pestañas y estas pestañas estan o abajo a arriba de la app estp con el fin de ofrecer otro tipo de navegacion , usando standalonComponentes es un poco mas dificil de implementar a lo que ya esta acostumbrado con ngModules, pero se puede y aqui te dejare son un paso clave para no saturar de codigo por aqui:
Para realizar esto en ionic Angular, primero deberas crear tu pagina en la cual vivira unicamente ese tabBar. En este caso como la tabBar solo pertenecera a un solo item de nuestro sideMenu, y no estara integrado como en toda la app por asi decirlo, sera un poco difrente a como nos lo sa la platilla predeterminada.:
En este caso creacmo una pagina con el comando `ng g page` y le pondremos asi `src/app/pages/first-with-tabs`.

Ya ahi, lo primodrial para que esto funcione, es que en routing de tu menu, la configuracion  de ese componente es diferente al de las demas paginas, usando loadChildren e importando el menu, quedando como ejemplo del routing del menu que nos llevara a nustrea pagina de tabs de la sig manera:

``` javascript
import { Routes } from '@angular/router';
import { MenuPage } from './menu.page';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('../first-with-tabs/first-with-tabs.routes').then(m => m.routes)
        // loadComponent: () => import('../first-with-tabs/first-with-tabs.page').then(m => m.FirstWithTabsPage)
      },
      {
        path: 'home',
        loadComponent:() => import('../home/home.page').then(m=>m.HomePage)
      },
      {
        path: 'second',
        loadComponent: () => import('../second/second.page').then(m => m.SecondPage)
      },
      {
        path: 'second/details',
        loadComponent: () => import('../details/details.page').then(m => m.DetailsPage)
      },
    ]
  },
];

```

ahi mas partes que se tienen que hacer pero esa es la más  clave para que funcione usando standaloneComponents. para mas detalles consulte el repo de:

[most-used-components-ionic](https://github.com/yisusDev76/most-used-components-ionic)

## Capitulo 8. Components and Modals

En este caso lo que haremos sera una lista con datos de una API para estilizarlas y seguir entendiendo como funcionan algunos componentes en ionic 

El primer paso es a realizar es crear la pagina donde listaremos a los clientes, y ajustar su routing en caso de que sea necesadio, el comando para crear una pagina es `ionic g ` y ya  seleccionas la pagina, en caso de ajustar el routing seria en: `src/app/pages/menu/menu.page.ts`

ya una vez donde veamos que la pagina si esta funcionando pues podemos empesar a crear un  servicio que nos arroje los datos de la api, en este caso dicho servicio queda asi:
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_URL = 'https://randomuser.me/api?results=10';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}

```



luego ya en la pagina consumimos el servicio y de momento pintaremos los datos en un log:
```ts
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListPage implements OnInit {
  // const [users, setUsers] = useState<any[]>([]);

  users: any[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.results;
      console.log(this.users);
    });
  }


}

```

Hay más pasos que se siguen pero aqui solo dejo los primeros pasos para no hacer tan largo el doc.

Despues de ralizar la lista lo que se realizo es que al hacer click en algun usuario se dispare un modal en el cual puedas ver informacion sobre el usuario, para esto se hicieron varias cosas pero aqui solo pondre las 2 que más me llamaron la atencioón.

La primera de ellas es que a los elementos de la lista se les agrego a cada uno el evento click el cual tiene una funcion para seleecionar a un usuario, y esto a su vez en cuanto se selecciona dicho usuario, se abre el modal:
```html
  <ng-template #content>
    <ion-card *ngFor="let user of users" (click)="setSelectedUser(user)">
      <ion-card-content class="ion-no-padding">
        <ion-item lines="none">
          <ion-avatar slot="start">
            <ion-img [src]="user.picture.large"/>
          </ion-avatar>
          <ion-label>
            {{user.name.first}} {{user.name.last}}
            <p>{{user.email}}</p>
          </ion-label>
          <ion-chip slot="end" color="primary">
            {{user.nat}}
          </ion-chip>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ng-template>
```



Ademas en este caso, el modal es crado en el html, en el mismo archivo que lo demas, por ende funciona ligeramente diferente el modal, asi que aqui dejare como es una maquetacion basica de esa parte:

```html

  <ion-modal [breakpoints]="[0, 0.5, 0.8]" [initialBreakpoint]="0.5"
  [isOpen]="selectedUser !== null" (willDismiss)="onWillDismiss($event)">
    <ng-template>
      <ion-header>
        <ion-toolbar color="success">
          <ion-buttons slot="start">
            <ion-button (click)="setOpen(false)">
              Close
            </ion-button>
          </ion-buttons>
          <ion-title>{{selectedUser?.name.first}} {{selectedUser?.name.last}}</ion-title>
        </ion-toolbar>
      </ion-header>

​      <ion-content>
​        SHEET
​      </ion-content>
​    </ng-template>
  </ion-modal>

  <ion-modal #cardModal trigger="card-modal">
    <ng-template>
      <ion-header>
        <ion-toolbar color="success">
          <ion-buttons slot="start">
            <ion-button (click)="cardModal.dismiss()">
              Close
            </ion-button>
          </ion-buttons>
          <ion-title>Card Modal</ion-title>
        </ion-toolbar>
      </ion-header>

​      <ion-content>
        <p>My card modal</p>
​      </ion-content>
​    </ng-template>
  </ion-modal>

  <ion-fab vertical="bottom">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

```

Y hay un par de cosas más pero las puedes chehcar en el repo si te interesa.



## Capitlo 9. Ionic animations API

En este caso se trabajo con el api de animaciones de ionic para crear animaciones super chidas, aqui solo mostrare una parte del codigo, la logica que se usa para crear la animacion de un solo boton, y que inicier de manera automatica al entrar a la pagina:
``` typescript
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationController, IonButton } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

/**
 * Animación fadeInOut:
 * Esta animación se utiliza para proporcionar una transición suave entre el contenido de carga y el contenido real en el HTML.
 * 
 * - Cuando el contenido cambia de un estado de carga (es decir, el "esqueleto" que simula el contenido) a mostrar el contenido real, 
 *   esta animación garantiza que el "esqueleto" desaparezca gradualmente y el contenido real aparezca gradualmente.
 * 
 * - De manera similar, si el contenido cambia del contenido real al estado de carga (aunque en el código actual no sucede), 
 *   esta animación se encargará de que el contenido real desaparezca gradualmente y el "esqueleto" aparezca gradualmente.
 * 
 * El propósito principal de esta animación es mejorar la experiencia del usuario (UX), haciendo que las transiciones entre 
 * diferentes estados del contenido sean más naturales y menos bruscas.
 */


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  // Definición de animaciones Angular
  animations:[
    trigger('fadeInOut',[
      state('void',style({opacity:0})),
      state('*', style({opacity:1})),
      transition('void => *',animate('200ms ease-in')),
      transition('* => void', animate('200ms ease-out'))
    ])
  ],
})
export class SecondPage implements OnInit {
  loading = true;
  // Referencia al botón en el template para poder acceder a él
  @ViewChild('btnIonAcademy', { read: ElementRef }) cartBnt!: ElementRef;
   // Referencia a la animación para poder controlarla
  private animation: Animation | undefined;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Simulación de carga: después de 2 segundos, se cambia el valor de 'loading'
    setTimeout(()=>{
      this.loading = false;
    },2000);
  }

  ngAfterViewInit() {
    // Crear animación después de que la vista ha sido inicializada
    const btnIon = this.createButtonAnimation();
    // Crea una animación principal y agrega la animación del botón
    this.animation = this.animationCtrl.create().addAnimation([btnIon]);
    // Inicia la reproducción de la animación
    this.animation.play();
  }

    // Función auxiliar para crear la animación del botón
  private createButtonAnimation() {
    return this.animationCtrl
      .create()  // Crea una nueva animación
      .addElement(this.cartBnt!.nativeElement) // Agrega el elemento del botón a la animación
      .duration(2000) // Duración de la animación
      .iterations(Infinity) // La animación se repetirá indefinidamente
      .delay(1000) // La animación comenzará después de 1 segundo
      .keyframes([ // Define los fotogramas clave de la animación
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
  }

}

```

Igual dejo aqui el link de la [documentacion](https://ionicframework.com/docs/utilities/animations) por si se quiere investigar más.

## Capitulo 10. Ionic Gesture API

Ionic tambnien provee una [api para g](https://ionicframework.com/docs/utilities/gestures)estos, la verdad aqui no lo explican super bien, pero igual se hizo el intento, y pondre el codigo que hice de ejemplo, el cual consta de mover un div que es unn cuadrado rojo de 50px x 50px.

En la parte del HTML solo tienes que poner el id al elemento html

```typescript
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestureController, GestureDetail, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class Tab1Page implements OnInit {

  @ViewChild('square', { read: ElementRef }) square!: ElementRef<HTMLIonCardElement> ;

  constructor(private el: ElementRef, private gestureCtrl: GestureController) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.square.nativeElement,
      threshold: 0,
      gestureName: 'my-gesture',
      onStart:(ev) => this.onStartHandler(ev),
      onMove:(ev) => this.onMoveHandler(ev),
      onEnd:(ev) => this.onMoveEnd(ev),
      // onStart: () => this.onStart(),
      
    });

    gesture.enable();
  }

  private onStartHandler = (detail:GestureDetail)=>{
    this.square.nativeElement.style.transition = 'none';
  }

  private onMoveHandler = (detail:GestureDetail) => {
    // console.log(detail);
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    this.square.nativeElement.style.transform = `translate(${x}px, ${y}px)`
  }

  private onMoveEnd = (detail:GestureDetail) => {
    this.square.nativeElement.style.transition = '500ms ease-out';
    this.square.nativeElement.style.transform =  `translate(0px,0px)`;
  }
}

```

Aqui hya un bug que puede aparecer en dispositivos nativos y sobre todo en los ios, y es que no solo el elemento al cual asigmamos se empice a mover, sino que los demas componentes se muevan a consecuncia de otro, esto como en nuestro es un comportamiento inesperado pues debemos solucionarlo, si en caso te pasa esta es la solucion:

En este caso otro elememto que teniamos antes del cuadrado rojo era un boton, en este caso lo que haremos sera en el elemento `IonContent` agregaremos la propieda scrollY, quedando de la sig manera:

```html
<ion-content class="ion-padding" scrollY=false>
```

Y con este corregiremos el error de que se movian las demas cosas.

## Capitulo 11. Ionic Web Components and Styling

En esta sección profundisaremos sobre los detalles de los componentes de ionic. Hasta ahora los hemos usado solo como componentes HTML pero veeremos ahora un poco de la profundidad que tienen por debajo del capo, veremos como podemos estilizarlos con color o difrentes propiedades con las que cuentan algunos de ellos.

Pero, ¿cómo funcionan realmente? Los componentes usando por ionic son en escencia componentes web y se crean con una herramienta llamda [stencil](https://stenciljs.com/), que tambien es desarrollada por ionic company. Pero entonces ahora la dudua es como funciona un componente web, esto es muy parecido a una etiqueta HTML reutilizable en la cual puedes usar, esto es basicamente como se construyen las librerias. 

De hecho, se pueden comprobar que todos los ionic components son componentes weub visitando su [gitHub](https://github.com/ionic-team/ionic-framework):
En este caso analizaremos el codigo del componente ion-item el cual se encuentra en : core/src/components/item/item.tsx

```typescript
import type { ComponentInterface } from '@stencil/core';
import { Component, Element, Host, Listen, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import type { AnchorInterface, ButtonInterface } from '@utils/element-interface';
import type { Attributes } from '@utils/helpers';
import { inheritAttributes, raf } from '@utils/helpers';
import { printIonError, printIonWarning } from '@utils/logging';
import { createColorClasses, hostContext, openURL } from '@utils/theme';
import { chevronForward } from 'ionicons/icons';

import { getIonMode } from '../../global/ionic-global';
import type { AnimationBuilder, Color, CssClassMap, StyleEventDetail } from '../../interface';
import type { InputInputEventDetail } from '../input/input-interface';
import type { RouterDirection } from '../router/utils/interface';

import type { CounterFormatter } from './item-interface';

/**
 * @virtualProp {"ios" | "md"} modo - El modo determina qué estilos de plataforma utilizar.
 *
 * @slot - El contenido se coloca entre los slots nombrados si se proporciona sin un slot.
 * @slot start - El contenido se coloca a la izquierda del texto del ítem en LTR, y a la derecha en RTL.
 * @slot end - El contenido se coloca a la derecha del texto del ítem en LTR, y a la izquierda en RTL.
 * @slot helper - El contenido se coloca debajo del ítem y se muestra cuando no se detecta un error. **OBSOLETO** Usa la propiedad "helperText" en ion-input o ion-textarea en su lugar.
 * @slot error - El contenido se coloca debajo del ítem y se muestra cuando se detecta un error. **OBSOLETO** Usa la propiedad "errorText" en ion-input o ion-textarea en su lugar.
 *
 * @part native - El botón, enlace o elemento div HTML nativo que envuelve todos los elementos hijos.
 * @part detail-icon - El icono chevron para el ítem. Solo se aplica cuando `detail="true"`.
 */

@Component({
  tag: 'ion-item',
  styleUrls: {
    ios: 'item.ios.scss',
    md: 'item.md.scss',
  },
  shadow: {
    delegatesFocus: true,
  },
})
export class Item implements ComponentInterface, AnchorInterface, ButtonInterface {
  private labelColorStyles = {};
  private itemStyles = new Map<string, CssClassMap>();
  private inheritedAriaAttributes: Attributes = {};

  @Element() el!: HTMLIonItemElement;

  @State() multipleInputs = false;
  @State() focusable = true;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * If `true`, a button tag will be rendered and the item will be tappable.
   */
  @Prop() button = false;

  /**
   * If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode`
   * is `ios` and an `href` or `button` property is present.
   */
  @Prop() detail?: boolean;

  /**
   * The icon to use when `detail` is set to `true`.
   */
  @Prop() detailIcon = chevronForward;

  /**
   * If `true`, the user cannot interact with the item.
   */
  @Prop() disabled = false;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * The fill for the item. If `"solid"` the item will have a background. If
   * `"outline"` the item will be transparent with a border. Only available in `md` mode.
   */
  @Prop() fill?: 'outline' | 'solid';

  /**
   * The shape of the item. If "round" it will have increased
   * border radius.
   */
  @Prop() shape?: 'round';
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * How the bottom border should be displayed on the item.
   */
  @Prop() lines?: 'full' | 'inset' | 'none';

  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit. Only applies when the `maxlength` property is set on the inner `ion-input` or `ion-textarea`.
   * @deprecated Use the `counter` property on `ion-input` or `ion-textarea` instead.
   */
  @Prop() counter = false;

  /**
   * When using a router, it specifies the transition animation when navigating to
   * another page using `href`.
   */
  @Prop() routerAnimation: AnimationBuilder | undefined;

  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * A callback used to format the counter text.
   * By default the counter text is set to "itemLength / maxLength".
   * @deprecated Use the `counterFormatter` property on `ion-input` or `ion-textarea` instead.
   */
  @Prop() counterFormatter?: CounterFormatter;

  @State() counterString: string | null | undefined;

  @Watch('counterFormatter')
  counterFormatterChanged() {
    this.updateCounterOutput(this.getFirstInput());
  }

  @Listen('ionInput')
  handleIonInput(ev: CustomEvent<InputInputEventDetail>) {
    if (this.counter && ev.target === this.getFirstInput()) {
      this.updateCounterOutput(ev.target as HTMLIonInputElement | HTMLIonTextareaElement);
    }
  }

  @Listen('ionColor')
  labelColorChanged(ev: CustomEvent<string>) {
    const { color } = this;

    // There will be a conflict with item color if
    // we apply the label color to item, so we ignore
    // the label color if the user sets a color on item
    if (color === undefined) {
      this.labelColorStyles = ev.detail;
    }
  }

  @Listen('ionStyle')
  itemStyle(ev: CustomEvent<StyleEventDetail>) {
    ev.stopPropagation();

    const tagName = (ev.target as HTMLElement).tagName;
    const updatedStyles = ev.detail;
    const newStyles = {} as CssClassMap;
    const childStyles = this.itemStyles.get(tagName) || {};

    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }

  connectedCallback() {
    if (this.counter) {
      this.updateCounterOutput(this.getFirstInput());
    }

    this.hasStartEl();
  }

  componentWillLoad() {
    this.inheritedAriaAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  componentDidLoad() {
    const { el, counter, counterFormatter, fill, shape } = this;
    const hasHelperSlot = el.querySelector('[slot="helper"]') !== null;
    if (hasHelperSlot) {
      printIonWarning(
        'The "helper" slot has been deprecated in favor of using the "helperText" property on ion-input or ion-textarea.',
        el
      );
    }

    const hasErrorSlot = el.querySelector('[slot="error"]') !== null;
    if (hasErrorSlot) {
      printIonWarning(
        'The "error" slot has been deprecated in favor of using the "errorText" property on ion-input or ion-textarea.',
        el
      );
    }

    if (counter === true) {
      printIonWarning(
        'The "counter" property has been deprecated in favor of using the "counter" property on ion-input or ion-textarea.',
        el
      );
    }

    if (counterFormatter !== undefined) {
      printIonWarning(
        'The "counterFormatter" property has been deprecated in favor of using the "counterFormatter" property on ion-input or ion-textarea.',
        el
      );
    }

    if (fill !== undefined) {
      printIonWarning(
        'The "fill" property has been deprecated in favor of using the "fill" property on ion-input or ion-textarea.',
        el
      );
    }

    if (shape !== undefined) {
      printIonWarning(
        'The "shape" property has been deprecated in favor of using the "shape" property on ion-input or ion-textarea.',
        el
      );
    }

    raf(() => {
      this.setMultipleInputs();
      this.focusable = this.isFocusable();
    });
  }

  // If the item contains multiple clickable elements and/or inputs, then the item
  // should not have a clickable input cover over the entire item to prevent
  // interfering with their individual click events
  private setMultipleInputs() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');

    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll(
      'ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle'
    );

    // The following elements should also stay clickable when an input with cover is present
    const clickables = this.el.querySelectorAll('ion-anchor, ion-button, a, button');

    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs =
      covers.length + inputs.length > 1 ||
      covers.length + clickables.length > 1 ||
      (covers.length > 0 && this.isClickable());
  }

  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  private hasCover(): boolean {
    const inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
    return inputs.length === 1 && !this.multipleInputs;
  }

  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  private isClickable(): boolean {
    return this.href !== undefined || this.button;
  }

  private canActivate(): boolean {
    return this.isClickable() || this.hasCover();
  }

  private isFocusable(): boolean {
    const focusableChild = this.el.querySelector('.ion-focusable');
    return this.canActivate() || focusableChild !== null;
  }

  private getFirstInput(): HTMLIonInputElement | HTMLIonTextareaElement {
    const inputs = this.el.querySelectorAll('ion-input, ion-textarea') as NodeListOf<
      HTMLIonInputElement | HTMLIonTextareaElement
    >;
    return inputs[0];
  }

  private updateCounterOutput(inputEl: HTMLIonInputElement | HTMLIonTextareaElement) {
    const { counter, counterFormatter, defaultCounterFormatter } = this;
    if (counter && !this.multipleInputs && inputEl?.maxlength !== undefined) {
      const length = inputEl?.value?.toString().length ?? 0;
      if (counterFormatter === undefined) {
        this.counterString = defaultCounterFormatter(length, inputEl.maxlength);
      } else {
        try {
          this.counterString = counterFormatter(length, inputEl.maxlength);
        } catch (e) {
          printIonError('Exception in provided `counterFormatter`.', e);
          // Fallback to the default counter formatter when an exception happens
          this.counterString = defaultCounterFormatter(length, inputEl.maxlength);
        }
      }
    }
  }

  private defaultCounterFormatter(length: number, maxlength: number) {
    return `${length} / ${maxlength}`;
  }

  private hasStartEl() {
    const startEl = this.el.querySelector('[slot="start"]');
    if (startEl !== null) {
      this.el.classList.add('item-has-start-slot');
    }
  }

  render() {
    const {
      counterString,
      detail,
      detailIcon,
      download,
      fill,
      labelColorStyles,
      lines,
      disabled,
      href,
      rel,
      shape,
      target,
      routerAnimation,
      routerDirection,
      inheritedAriaAttributes,
    } = this;
    const childStyles = {} as StyleEventDetail;
    const mode = getIonMode(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : ('div' as any);

    const attrs =
      TagType === 'button'
        ? { type: this.type }
        : {
            download,
            href,
            rel,
            target,
          };
    // Only set onClick if the item is clickable to prevent screen
    // readers from reading all items as clickable
    const clickFn = clickable
      ? {
          onClick: (ev: Event) => {
            openURL(href, ev, routerDirection, routerAnimation);
          },
        }
      : {};
    const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
    this.itemStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    const ariaDisabled = disabled || childStyles['item-interactive-disabled'] ? 'true' : null;
    const fillValue = fill || 'none';
    const inList = hostContext('ion-list', this.el) && !hostContext('ion-radio-group', this.el);

    return (
      <Host
        aria-disabled={ariaDisabled}
        class={{
          ...childStyles,
          ...labelColorStyles,
          ...createColorClasses(this.color, {
            item: true,
            [mode]: true,
            'item-lines-default': lines === undefined,
            [`item-lines-${lines}`]: lines !== undefined,
            [`item-fill-${fillValue}`]: true,
            [`item-shape-${shape}`]: shape !== undefined,
            'item-disabled': disabled,
            'in-list': inList,
            'item-multiple-inputs': this.multipleInputs,
            'ion-activatable': canActivate,
            'ion-focusable': this.focusable,
            'item-rtl': document.dir === 'rtl',
          }),
        }}
        role={inList ? 'listitem' : null}
      >
        <TagType
          {...attrs}
          {...inheritedAriaAttributes}
          class="item-native"
          part="native"
          disabled={disabled}
          {...clickFn}
        >
          <slot name="start"></slot>
          <div class="item-inner">
            <div class="input-wrapper">
              <slot></slot>
            </div>
            <slot name="end"></slot>
            {showDetail && (
              <ion-icon
                icon={detailIcon}
                lazy={false}
                class="item-detail-icon"
                part="detail-icon"
                aria-hidden="true"
                flip-rtl={detailIcon === chevronForward}
              ></ion-icon>
            )}
            <div class="item-inner-highlight"></div>
          </div>
          {canActivate && mode === 'md' && <ion-ripple-effect></ion-ripple-effect>}
          <div class="item-highlight"></div>
        </TagType>
        <div class="item-bottom">
          <slot name="error"></slot>
          <slot name="helper"></slot>
          {counterString && <ion-note class="item-counter">{counterString}</ion-note>}
        </div>
      </Host>
    );
  }
}
```

La explicacion de todo este codigo es la siguiente:Lo que estás viendo es una definición de un componente web hecho con Stencil, un generador de componentes web que es utilizado por el equipo de Ionic para crear componentes que pueden ser usados en diferentes frameworks y en vanilla JS.

Voy a explicarte las partes más importantes del archivo:

1. **Importaciones** Estas líneas importan funciones, tipos y componentes que se utilizarán en el archivo. Por ejemplo, se importan funciones de ayuda, interfaces y símbolos de iconos.

2. **Decorador `@Component`** Esta sección define metadatos del componente, como el nombre de la etiqueta (`tag`), los estilos específicos para cada modo (iOS y Material Design) y si utiliza Shadow DOM (un ámbito encapsulado para el CSS y el DOM del componente).

3. **Clase `Item`** Aquí es donde se define el componente `ion-item`. Esta clase implementa varias interfaces que describen su comportamiento.

4. **Propiedades de clase** Estas propiedades representan el estado interno y los valores configurables del componente. Por ejemplo:

   - `@State() multipleInputs = false;`: Un estado que indica si el ítem tiene múltiples entradas.
   - `@Prop() button = false;`: Una propiedad que indica si el ítem es un botón.

5. **Métodos de clase**

   - `connectedCallback()`, `componentWillLoad()`, `componentDidLoad()`: Son métodos del ciclo de vida del componente que se ejecutan en diferentes etapas de la existencia del componente.
   - `isClickable()`, `canActivate()`, `getFirstInput()`, etc.: Son métodos de ayuda para realizar diferentes funciones dentro del componente.

6. **Renderización (`render` method)** Este método define el HTML que se renderizará. Utiliza JSX, que es una extensión de JavaScript para escribir XML/HTML dentro de archivos JavaScript/TypeScript.

   En este método, se decide qué etiqueta renderizar basándose en las propiedades del componente (por ejemplo, si es un botón o un enlace) y luego se definen los slots (espacios donde el usuario del componente puede insertar contenido) y otros elementos internos.

Para simplificar, `ion-item` es un componente altamente configurable que puede actuar como un botón, un enlace, mostrar detalles, contener entradas (como textos, interruptores, fechas) y mucho más.

SI tambien realizas una ispeccion de elementos con tu navegador te daras cuenta de que ahi estan los elementos como en el codigo fuente, aqui lo curiosiso a destacar y a entender la diferencia entre el Shadows DOM y el DOM.

### Diferencias entre el Shadow DOM y el DOM

### DOM (Document Object Model):

El **DOM** es una representación estructurada en árbol de un documento HTML o XML. Se puede pensar en él como una interfaz que permite a los programas y scripts acceder y manipular el contenido, la estructura y el estilo de los documentos web. Cada elemento HTML, como un párrafo o un encabezado, se convierte en un nodo en el DOM.

### Shadow DOM:

El **Shadow DOM** es una característica del DOM que permite encapsular una parte del DOM, separándola del DOM principal del documento. Esta encapsulación permite que los estilos y scripts definidos dentro del Shadow DOM no afecten al documento principal y viceversa. Es una característica fundamental en la creación de componentes web personalizados, ya que permite que los componentes se construyan de manera modular sin preocuparse de que los estilos o scripts del componente interfieran con el resto de la página.

### Ejemplo usando el inspector de elementos:

Imagina que estás utilizando un elemento personalizado llamado `<mi-componente>`. Este componente puede tener un Shadow DOM que encapsula su estructura interna.

1. Abre una página web que contiene el elemento `<mi-componente>`.
2. Abre el inspector de elementos de tu navegador (por lo general, puedes hacer clic derecho en cualquier parte de la página y seleccionar "Inspeccionar" o "Inspeccionar elemento").
3. Busca el elemento `<mi-componente>` en el árbol del DOM.
4. Si el componente está utilizando Shadow DOM, verás un nodo llamado `#shadow-root` dentro de `<mi-componente>`. Este nodo representa el Shadow DOM del componente.
5. Expande `#shadow-root` y verás el contenido interno del componente, que está encapsulado y separado del DOM principal.

**Diferencias clave**:

1. **Encapsulación**: El Shadow DOM permite encapsular estilos y scripts, evitando que estos afecten al DOM principal y viceversa.
2. **Uso**: Mientras que el DOM se utiliza para representar y manipular todo el contenido de una página web, el Shadow DOM se utiliza específicamente para encapsular la estructura interna de un componente web personalizado.

Pero ahora te pregintaras y a mi para que me sirve saber eso?, bueno entender esto es importante para saber que estos comopenentes no son magia, al final de cuentas son HTML con mucha logica porn debajo del capó. Tambien entender esto nos ayudara a personalizar/estilizar nuestros components.En este caso te mostrate como cambiarle el color de fondo a los ios item, de nuestra lista creada en capitulos anteriores. Para esto nos iremos al scss de nuestro componentes:
src/app/pages/list/list.page.scss
y escribimos lo sig:

```scss
ion-item{
    background: red;
}
```

Una vez guardado cambios observaremos que no ocurre ningun cambio, pero proque pasa esto? la razon es porque el fondo de este elemento de ionic es definido en el web component y es escondido en el shadow DOM. Asi que para poder inyectarle estilos a los componentes ionic por lo genenal es neceasrio depender de variables css. 

Para esto iremos a la documentacion de ionic, buscaremos el ion-item y si se inspecciona el post  vremos la parte de [CSS Shadow Parts](https://ionicframework.com/docs/api/item#css-shadow-parts) y CSS Custom propierties habra un monton de definiciones de las difrentes partes del componetes, y en este ultimos veremos las variables con las cuales podemos cambiar el estilo de nuestro componente. Estas variables tambien se pueden encontrar en el inspector de elementos en la parte del css si buscas con el filtro de `--`

Asi que una vez analizadas las pripiedades css, entonces haremos un ligero cambio a nuestro css y quedara asi:
```scss
ion-item{
    --background: red;
}
```

Esto si funciona proque el estilon que contiene la variables scss se inyecta en el componente

Además, cuando hablamos de colores como los que se han visto al principio de `primary` y `secondary` esta predefinidos en el archivo que se encuertra en nuestro proyecto: src/theme/variables.scss

Este archivo ya contiene algunos de los estilos predefinidos pero tambien podrias insertar tu propio colo llamado por ejemplo: color-simon de la siguente manera. SOlo 

```scss
  /** color-simmon **/
  --ion-color-color-simon: #0dd36f;
  --ion-color-color-simon-rgb: 45, 211, 111;
  --ion-color-color-simon-contrast: #ffffff;
  --ion-color-color-simon-contrast-rgb: 255, 255, 255;
  --ion-color-color-simon-shade: #28ba62;
  --ion-color-color-simon-tint: #42d77d;
```

Y ahora si quiero usar los colores definidos en ese ambiente, simplemente hago algo como :

```scss
--color:var(--ion-color-dark);
```

Esto seria la forma en la cual, con variables css poder inyectar estilos a nuestros componentes de ionic.

### 2da forma de personalizar los componetes

En algunos casos, si en nuestros componentes de ionic tenemos un icono de detalle como en la lista del menu que tiene un icono como de una flecha              `(<ion-item detail="true" )` a veces es dificl estilizar esto con scss normalemente, asi que como le damos estilo adicional? Para esto se usara la forma llamada CSS parts. 

Esto es una alternativas ya que tener variables css para cada unica propiedad de un elemento seria algo practicamente imposible. Con esta nueva tecnica vamos a diseñar diferntes partes del elemento. SI analizamos el codigo fuente del elemento item proporcionado anterioirmente y nos vamos a la lo que diga part, vemos que exite una parte nativa y tenemos una parte de detalle de icono que esta definido en ese HTML.

Lo que nos muestra la documentacion del ion-item el la parrtes css es esto:

Para que el sig codigo funcione tiene que ir en : src/app/pages/menu/menu.page.scss

```scss
ion-item::part(detail-icon){
    color: #ff00ff;
    opacity: 1;
}
```

Esta cabiambara el icono de flacha del item de la lista a rosa. Como podemos observar estas son reglas css y no son variables css y podemos ahora inyectarlo directamente en nuestro archivo scss del componente.

Como conclusion podemos decir que tenemos 2 opciones para diseñar y personalizar los componentes de ionic:

1. Usando las propiedades definidas con ayuda de variables scss para anular cosas generales como border, colores, backgrouns, sombras, etc
2. SI tienes algo que quieres modificar pero no existe la variable scss en ese shadows component puede tener acceso usnado las css parts y asi no usar varibles css

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `detail-icon` | The chevron icon for the item. Only applies when `detail="true"`. |
| `native`      | The native HTML button, anchor or div element that wraps all child elements. |

Si optenemos estas partes ahora si seremos capaces de inyectar nuestros propios estilos sin usar variables scss en cada propiedad del elemento que queramos modificar.

### Configuración general de una ionic app

Como has visto, ionic usa un estilo adaptativo a la plataformam es por eso que en dispositivos android y la web se ven como material design y en ios tenemos el estilizo caracteristicos de apple, sin emebargo si no te gusta esto de adaptar los estilos se pueden cambiar en ciertos componentes, pero si quieres cambiarlo en todos tus componentes tambien puedes hacerlo globalmente . Ahora te mostrare como hacer esto:

Primero te mostarte como hacerlo localmente en pedazos de tu codigo, por ejemplo, si tienes unos input que no te gustan como se ven en ios lo puedes cambiar con el atributo `mode` y ya seleccionas si es ios o md (Material Design). ya en codigo se veria asi:
```html
<ion-input mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="email"></ion-input>
<ion-input mode="md" class="ion-margin-top" fill="outline" labelPlacement="floating" label="password" type="password" placeholder="password"></ion-input>
```

Con esto, podemos forzar a un componente u otro a verse de cierta manera en los 2 sistemas. SI te fijas en el isnpector de elementos, notass como las clases de los elementos ahora empezaran con md en este caso, y en la etiqueta principal de todo aparecera la clase general que se aplicara dependiendo si estas en ios o en android.

Para realizar el cambio globalemente:

Para hacerlo en Ionic con Angular, sigue estos pasos:

1. Abre tu proyecto de Ionic Angular.
2. Navega al archivo `app.module.ts`, que se encuentra en la carpeta `src/app`.
3. Dentro del `@NgModule` decorator en la sección de `imports`, deberías tener algo parecido a esto:

```typescript
 codeimports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule
],
```

1. Modifica `IonicModule.forRoot()` para que incluya la opción de configuración de modo:

```typescript
codeimports: [
  BrowserModule,
  IonicModule.forRoot({
    mode: 'ios'
  }),
  AppRoutingModule
],
```

Esto establecerá el modo de todos los componentes a "ios", independientemente de la plataforma en la que se esté ejecutando la aplicación.

1. Guarda el archivo y reinicia la app para ver los cambios.

Ahora, cuando ejecutes tu aplicación en la web, Android o cualquier otra plataforma, verás que todos los componentes de Ionic adoptan el estilo de iOS. 

Esto es si usas ngModoule, si usas standalonComponents, como ahi no hay modules, pues la forma es ir al archivo `/home/yisus/test projects/myApp/src/main.ts` y ahi en la funcion boostrap aplication, en los priverder pondras 

```typescript
 importProvidersFrom(IonicModule.forRoot({
      mode: 'ios'
    })),
```

quedando el archivo de la sig forma:
```typescript
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({
      mode: 'ios'
    })),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes),
    provideHttpClient(),
  ],
});

```

Tambien, adicionalmente si no quieres nada de animaciones, en esta parte las puedes desctivar, quendado la funcion de boostrapAplication de la sig forma:
```typescript
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({
      mode: 'ios',
      animated:false
    })),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes),
    provideHttpClient(),
  ],
});
```

De esta manera no habra transiciones en ninguna parte de la app y todo se mostrara bruscamente. Con este capirtulo hemos concluiodo todo lo relacionado con la UI de la app en si, como los graficos y eso, y ahora pasaremos a ver mas funciones extras como lo es el uso de cosas nativas del dispositivo.

Ya si tu quieres profundizar más en lo temas anterioires pues es leer articulos y la documentacion oficial.

## Capitilo 12. Using Capacitor Plugins

Hasta el momento hemos usado pero muy poco capacitor, y es hora de usarlo en su maximo potencial que son los puglins, como recordaras, capacitor no solo envuelve cualquiert tipo de aplicacion en un contenedor nativo, sino que tambien otorga una gran funcionalidad como lo son los plugins, ahorita usaremos unos para probar como funcionan, empezaremos con el de la camara, para instalarlo solo usa estos comandos:

```bash
npm install @capacitor/camera
npx cap sync
```

En primer lugar cada que instalemos un plugin tenemos que reiniciar nuestra live reload, porque estamos haciendo cambios en los proyectos nativos, ya ahora si debes de configurar una serie de cosas en cada proyecto porque se hacen diferentes en una u otra plataforma

Configuraemos los permisos que se mencionan en la app de capacitor en cada platadorma

### Empezamos con android: 

Tendras que ir a este archivo de tu proyecto nativo:
/home/yisus/test projects/myApp/android/app/src/main/AndroidManifest.xml

Luego vas a la parte de permisos y ahi pegas esto;
```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Estos permisos son para leer imagenes y leer y escribir en el almacenamiento

### Para ios

Es tecnicamente los mismos permisos pero esto se hace de una forma diferente. En eset caso el archivo a editar es: ios/App/App/Info.plist y al final, despues de la tag <true/> y antes de las tags </dict> y </plist> agregamos lo siguiente:
```xml
	<key>NSCameraUsageDescription</key>
	<string>$(PRODUCT_NAME) uses the camera to scan barcodes</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>$(PRODUCT_NAME) uses the photho library to scan barcodes</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>$(PRODUCT_NAME) uses the photho library to scan barcodes</string>
```



Recuerda ser cuidadoso con esto.
Ahora si como usamos realmente la camara?

Bueno antes de esolo solo queda un elemento mas por verificar y es el de bueno ya vimos como configurar para android e ios, pero y en la web?, bueno para esto existen:

Elementos de PWA
Algunos complementos de Capacitor, como Camera o Toast, tienen una interfaz de usuario basada en web disponible cuando no se ejecutan de forma nativa. Por ejemplo, llamar a Camera.getPhoto() cargará una experiencia de toma de fotografías responsiva cuando se ejecute en la web

El problema con este elemento es que no esta funcionando muy bien a la hora de hacer estas notas, por lo cual la instalacion no se hara y usaremos unos scripts en su lugar.

Estos scripts van en el index.html de tu proyecto, en la etiqueta <head> al mero final

```html
<script
  type="module"
  src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.js"
></script>
```

Despues de esto, ahora si iremos a donde queremos que se habra la camara , en este caso a una pagina de detalles, y configuramos los siguiente en el html y en typeScript:
```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref=""></ion-back-button>
    </ion-buttons>
    <ion-title>details- Image Example</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button (click)="takePicture()" expand="full">
    Take Picture
  </ion-button>
  <img [src]="image" alt="">
</ion-content>

```

Y en su archivo de logica ira lo siguiente:
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  image:any;

  constructor() { }

  ngOnInit() {
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType:CameraResultType.Base64
    });

    const img = `data:image/jpeg;base64,${image.base64String}`;
    this.setImage(img);
    
  }

  setImage(image:any){
    this.image = image
  }

}

```

Rrcuerda usar el sig comando para instalar la app en un dispositivo y verlo tambien en mas sin instalar en app:
```bash
ionic cap run android --livereload --external --public-host
```

Igual si algo no esta funcionando, por si las dudas, cierra el servidor y vuelva a ejcutar el comando para descartar cualquier cosa.

*Nota*: La camara no funciona en la web, pero cuando estas en el navegador, si instalas la app si funcioma, de igual manera, si no detecta camara te permitira elegir una de la galeria.

Despues de porbar este plugin se te anima a probar otros más siguiendo la documentacion, los plugins recomendables para esto son:

* Browser
* Geolocation
* Google Maps
* Push Notifications

## 13 . App icon and slpash Screen

Una de las cosad que debemos hacer a medida que nos acercamos a lanzar nuestra app o a contruirla, es agregar un icon de aplicacion y una pantalla de presentacion o tambien llamada SplashScreen, para realizar esto hay un paquete que lanzo el team de ionic el cual se llama `capacitor-assets`, y el comando para instalar es:

```ba
npm install --save-dev @capacitor/assets
```

luego crearemos una carpeta a nivel del proyecto, o sea en cuanto abre la carpeta del proyecto, en ese nivel la crearas, la carpeta la llamaras `assets`. Una vez tengas la carpeta ahi dentro podras tu logo que de preferencias sea de 1024px x 1024px para que todo salga bien, y en png es importante. Tambien pudes poner otro logo que sea dark y este se mostrara para cuando tu app este en modo oscuro.

Depues de eso, podemos usar un comando para generar los assets. 

```bash
npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'
```

Este es el comando que ofrece capacitor en su pagina pero nosotros usaremos una variante que es :

```bash
npx @capacitor/assets generate --iconBackgroundColor '#0A091A' --splashBackgroundColor '#0A091A'
```

Despues de esto,  solo toca correr las apps y veras que ya esta funcionando tanto la splash Screen como el icono de tu aoo

## Trucos

1. Para que la pantalla de login no se este deslizando puedes usar la propiedad

```
scrollY=false
```

2. una manera facil de centrar texto  y componentes en un slide es la siguiente:

   ```scss
   .swiper-slide {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content:center;
       text-align: center;
       
   }
   ```

3. En Ionic, las animaciones de transición de página están predefinidas para imitar las transiciones nativas de las respectivas plataformas (iOS y Android). Por lo tanto, si tu aplicación se ejecuta en un dispositivo iOS, las transiciones entre páginas imitarán las transiciones nativas de iOS, y lo mismo ocurrirá para Android.

   Ionic maneja estas transiciones automáticamente, y no hay una lista específica de animaciones predefinidas que puedas seleccionar para las transiciones de página. La transición de una página a otra utilizará la animación predefinida adecuada para la plataforma en la que se esté ejecutando la aplicación.

   Si deseas personalizar estas transiciones, tendrás que definir tus propias animaciones utilizando las herramientas de animación proporcionadas por Ionic, como expliqué anteriormente. Esto te permite tener un control completo sobre la apariencia y el comportamiento de las transiciones de página, pero no hay una lista específica de animaciones predefinidas que puedas seleccionar fuera de las que imitan el comportamiento nativo.

4. Se recomienda que en tu app, en la parte de menu, cambies la ruta y en vez de que la ruta sea algo como:

   ```http
   http://localhost:8100/menu/home
   ```

   sea mejor algo como: 

   ```http
   http://localhost:8100/menu/first
   ```

5. si no quieres ver la flecha hacia la derecha que se incorpora en los dispositivos nativos, sencillamente tienes que agregar un atributo en la tag `<ionItem>`

   ```html
   <ionItem detail="false">
       <>
   </ionItem>
   ```


​	Para crear un menu usando standalone componnetes es un poco mas complicado que con ngModules de principio, pero una vez que le entiendes se vuelve 	más fácil. No podre codigo aqui para no hacerlo muy largo pero se puede chechar los vidos que explican como o se puede seguir el repo te quengo que tiene 	bastente de lso componentes y cosas más usadas para tu app. [Aqui dejo el link del repo con el sideMenu con en Standalone Components](https://github.com/yisusDev76/most-used-components-ionic) 







