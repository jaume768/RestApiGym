create table tipo(
	id int AUTO_INCREMENT,
    Nombre text,
    Dia text,
    Foto_portada int,
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

insert into tipo() VALUES(1,"Pierna","Lunes y Jueves"),(2,"Push","Martes y Viernes"),(3,"Pull","Miercoles y Sabado");
insert into entrenamientos() VALUES(1,"Peso Muerto",70,7,3,120,"https://w7.pngwing.com/pngs/818/437/png-transparent-deadlift-smith-machine-weight-training-leg-curl-squat-barbell-angle-white-hand.png",1),(2,"Extension de pierna",78,10,3,100,"https://i.blogs.es/c32e1e/guia1/450_1000.webp",1),
(3,"Sentadillas",70,6,3,0,"https://i.blogs.es/78c15b/sergio-pedemonte-7li2dupduew-unsplash/1366_2000.jpg",1),(4,"Press de pirena",80,10,3,0,"https://i.blogs.es/7425be/prensa1/1366_2000.jpg",1),
(5,"Gemelos",110,10,3,0,"https://as01.epimg.net/deporteyvida/imagenes/2020/12/09/portada/1607504260_451286_1607504315_noticia_normal_recorte1.jpg",1);