create table tipo(
	id int AUTO_INCREMENT,
    Nombre text,
    Dia text,
    PRIMARY KEY (id)
);

create table entrenamientos(
	id int AUTO_INCREMENT,
    Nombre text,
    Kilos int,
    Repes int,
    Series int,
    Pr int,
    link_foto text,
    Tipo int,
    PRIMARY KEY (id),
    FOREIGN KEY (Tipo) REFERENCES tipo(id)
);

create table horario(
    id int AUTO_INCREMENT,
    Nombre text,
    Kilos int,
    Repes int,
    Series int,
    Pr int,
    Dia int,
    Mes int,
    id_entrenamiento int,
    PRIMARY KEY (id),
    FOREIGN KEY (id_entrenamiento) REFERENCES entrenamientos(id)
);

insert into tipo(Nombre,Dia) VALUES("Pierna","Lunes y Jueves"),("Push","Martes y Viernes"),("Pull","Miercoles y Sabado");
insert into entrenamientos(Nombre,Kilos,Repes,Series,Pr,link_foto,Tipo) VALUES("Peso Muerto",70,7,3,120,"https://w7.pngwing.com/pngs/818/437/png-transparent-deadlift-smith-machine-weight-training-leg-curl-squat-barbell-angle-white-hand.png",1),("Extension de pierna",78,10,3,100,"https://i.blogs.es/c32e1e/guia1/450_1000.webp",1),
("Sentadillas",70,6,3,0,"https://i.blogs.es/78c15b/sergio-pedemonte-7li2dupduew-unsplash/1366_2000.jpg",1),("Press de pirena",80,10,3,0,"https://i.blogs.es/7425be/prensa1/1366_2000.jpg",1),
("Gemelos",110,10,3,0,"https://as01.epimg.net/deporteyvida/imagenes/2020/12/09/portada/1607504260_451286_1607504315_noticia_normal_recorte1.jpg",1),
("Press banca",70,8,3,90,"https://i.blogs.es/85d668/bench-press-1/450_1000.webp",2),("Press inclinado",60,8,3,0,"https://lifestyle.fit/app/uploads-lifestyle.fit/2018/11/New-Project-5-1.jpg?x=480&y=375&quality=40",2),
("Press de hombro",16,8,3,18,"https://i.blogs.es/6485db/pres-hombro/1366_2000.jpg",2),("Elevaciones laterales",12,8,3,14,"https://i.blogs.es/7ad688/ejercicio21-3/450_1000.webp",2),
("Flexiones",0,20,3,0,"https://i.blogs.es/886311/flexiones/450_1000.webp",2),("Fondos",77,10,3,77,"https://i.blogs.es/e7c213/dips/1366_2000.jpg",2),
("Press militar",40,8,3,40,"https://i.blogs.es/16eea9/press-militar1/450_1000.webp",2);

insert into entrenamientos(Nombre,Kilos,Repes,Series,Pr,link_foto,Tipo) VALUES ("Dominadas",12,6,3,12,"https://www.fisioterapiaconmueve.com/wp-content/uploads/2019/11/dominada.jpg",3),
("Curl de biceps",14,10,3,14,"https://i.blogs.es/eeba20/martillo1/450_1000.webp",3),("Remo",50,10,3,50,"https://i.blogs.es/209555/remo1/1366_2000.jpg",3),
("Jalones al pecho",60,10,3,70,"https://i.blogs.es/c56863/poleaalpecho1/1366_2000.jpg",3),("Abdominales en barra de dominadas",0,10,3,0,"",3),
("Remo con barra",50,10,3,60,"https://i.blogs.es/99990c/remo-barra/1366_2000.jpg",3);