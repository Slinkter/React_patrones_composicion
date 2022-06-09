# 3.Curso de React js  patrones de render y composcion

Principios de diseño de React

Los principios de diseño son las reglas que un equipo sigue para crear sus aplicaciones o proyectos, y el equipo de Facebook encargado de mantener y crear nuevas APIs para React no es la excepción, ellos también cuentan con ciertos principios a la hora de escribir su código. 


##  Principios 

	### 1.Abstracciones comunes
En el core de React no se van a incluir APIs para resolver problemas demasiado específicos, a menos de que muchas personas estén resolviendo dicho problema de una manera muy mala y poco funcional.
	
	### 2.Interoperabilidad
React debe ser capaz de convivir con otras herramientas sin causar ningún problema, por lo tanto podemos tener proyectos que usan diferentes herramientas y funcional igualmente, o también podemos migrar proyectos que están construidos con otra herramienta y lentamente incluir React sin que la app se rompa.
	
	### 3.Estabilidad
React no va a lanzar nuevas versiones de su core si estas rompen el código que ya existe, por lo tanto el código que escribimos hace varios meses o años todavía va a funcionar a día de hoy. En caso de que el equipo de React saque alguna funcionalidad que cause conflictos con APIs anteriores, entonces le avisaran a la comunidad para así poder implementar una solución diferente a tiempo.
	
	### 4.Experiencia de desarrollo
React no solo busca que podamos implementar soluciones a nuestros problemas con sus APIs, sino que también busca que estas soluciones sean disfrutables, y que brinden una buena experiencia a la hora de ser implementadas. 
	
	### 5.Implementación(prioridad)
El código 'aburrido' siempre se va a preferir sobre el código elegante, ya que este último puede llegar a ser difícil de mover o eliminar en caso de que se deseen hacer modificaciones a la app.  
	
	### 6.Optimizado para la instrumentación(prioridad)
Los nombres de las APIs de react siempre tratarán de ser autodescriptivos, detallados y distintivos, aunque esto no significa que se vayan a colocar nombres muy largos.
	
	### 7.Dogfooding(prioridad)
Debemos recordar que React es un proyecto creado por y para Facebook, por lo tanto el equipo encargado de crear nuevas funcionalidades siempre priorizará lo que necesita Facebook y no lo que quiere o necesita la comunidad. Aunque esto parece malo a primera vista, es todo lo contrario, ya que React cuenta con el apoyo y mantenimiento de una empresa enorme, lo cual lo convierte en una herramienta muy confiable.


## Principios  para la comunidad
	
	1.Planificación
Antes de empezar cualquier proyecto debemos definir qué responsabilidades le vamos a delegar a React y cuales dependen de nosotros.
	
	2.Configuración
Nosotros no podemos, o mejor, no deberíamos modificar directamente el código de React, ya que esto podría causar conflictos a la hora de añadir nuevas herramientas al entorno de nuestro proyecto.
	
	3.Depuración
	React siempre nos va a dejar pequeñas pistas cada vez que ocurra un error dentro de nuestra aplicación, para así poder encontrar cuál es el foco del problema y saber que deberíamos cambiar.
	
	4.Composicion 
	
	
	
	• Principio de composición de componentes 
	
	La Composición de componentes ,es un patron o principio, indica que cada componente debe darnos mucha libertad para elegir donde y como usarlo
	Cada componente debe realizar una tarea en específica, pero no debe de decirnos como usar esa solución que nos brinda, debe de ser flexible al momento de utilizarlo
	Nos permitirá tener componentes mucho más fáciles de integrar al resto de componentes
	Nos facilitará reutilizar o hacer cambios en nuestros componentes
	
	
	La colocación de estado(es un problemas)
		○ Maxima cercania a la relevancias : poner acerca al App
		○ Stateful vs stateless : no mezclar UI con lógica. 
	
	
	-App (estado general compartido)
	--TodoHeader
	---TodoCounter (stateless)
	---TodoSearch (statefull)
	--TodoList
	---TodoItem (statefull)
	
	
	
	Render props
	Las render props son una técnica avanzada que nos permite reutilizar componentes y lógica, para no tener que reinventar la rueda. 
	
	Esta técnica se basa en pasar una función como prop a un componente, dicha función se encargará de renderizar lo que queremos que contenga este componente, removiendo así la lógica del render hacia otra parte y permitiéndonos reutilizar la lógica que contenga la función.
	
	
	Render functions 
	
	Es un patrón , reciben una función para enviar la información 
	
	
	
	
	
	
	En el ejemplo anterior renderizamos una lista con el nombre de varias personas, pero el contenido de nuestra lista no lo define el componente ListOfPeople, sino App por medio de la función render que le pasamos a ListOfPeople en sus props.
	
	
	
	High Order Components
	
	
	Los high order components (o componentes de orden superior) son componentes que reciben un componente y retornan otro componente con nuevas props o elementos, lo cual nos permite reutilizar lógica dentro de varios componentes.
	
	
	Y con este HOC ahora podemos reutilizar este código, y ya no tenemos que crear un estado local para cada componente, sino que le delegamos esta tarea a otro componente. 
	
	
	
	
	
	Render props vs HOCs vs React Hooks
	
	
	Desde ahora cabe aclarar que cada herramienta está pensada para realizar diferentes tareas, por lo tanto no es una batalla como tal, sino más bien una comparación entre la funcionalidad de cada uno de estos patrones.
	Render props
	Las render props son muy útiles cuando deseamos realizar validaciones o renderizados condicionales, ya que podemos definir que es lo que vamos a mostrar en un componente desde sus props.
	HOCs
	Los high order components muestran todo su potencial cuando queremos reutilizar lógica, código e inyectar información a un componente por medio de sus props. Es cierto que estos aumentan la complejidad de nuestro código, pero si son utilizados correctamente llegan a ser una herramienta muy poderosa.
	Custom Hooks
	Los hooks de React son una herramienta que está disponible desde la versión 16.8.0, estos nos permiten encapsular lógica dentro de una función, la cual podemos utilizar tantas veces como queramos. Por ejemplo, podríamos crear un custom hook que nos permite hacer peticiones hacia cierto endpoint y que nos retorne el estado actual de la petición para saber que renderizar mientras llega la data.
	
