/*==============================================================*/
/* Nom de SGBD :  Sybase SQL Anywhere 11                        */
/* Date de création :  29/04/2023 10:43:29                      */
/*==============================================================*/


if exists(select 1 from sys.sysforeignkey where role='FK_ALERTE_RECEVOIR_VEHICULE') then
    alter table ALERTE
       delete foreign key FK_ALERTE_RECEVOIR_VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_ASSURANC_SOUSCRIRE_VEHICULE') then
    alter table ASSURANCE
       delete foreign key FK_ASSURANC_SOUSCRIRE_VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CONDUIRE_CONDUIRE_VEHICULE') then
    alter table CONDUIRE
       delete foreign key FK_CONDUIRE_CONDUIRE_VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CONDUIRE_CONDUIRE2_CONDUCTE') then
    alter table CONDUIRE
       delete foreign key FK_CONDUIRE_CONDUIRE2_CONDUCTE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_ENTRETIE_AFFECTER_ALERTE') then
    alter table ENTRETIEN
       delete foreign key FK_ENTRETIE_AFFECTER_ALERTE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_ENTRETIE_AFFECTER3_RAPPELL') then
    alter table ENTRETIEN
       delete foreign key FK_ENTRETIE_AFFECTER3_RAPPELL
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_ENTRETIE_CONCERNER_VEHICULE') then
    alter table ENTRETIEN
       delete foreign key FK_ENTRETIE_CONCERNER_VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_RAPPELL_RECEVOIR2_VEHICULE') then
    alter table RAPPELL
       delete foreign key FK_RAPPELL_RECEVOIR2_VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_RAPPORT_ASSOCIER__VEHICULE') then
    alter table RAPPORT
       delete foreign key FK_RAPPORT_ASSOCIER__VEHICULE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_RAPPORT_AVOIR_CONDUCTE') then
    alter table RAPPORT
       delete foreign key FK_RAPPORT_AVOIR_CONDUCTE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_REPARATI_AFFECTER2_RAPPELL') then
    alter table REPARATION
       delete foreign key FK_REPARATI_AFFECTER2_RAPPELL
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_REPARATI_AFFECTER4_ALERTE') then
    alter table REPARATION
       delete foreign key FK_REPARATI_AFFECTER4_ALERTE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_REPARATI_CONCERNER_VEHICULE') then
    alter table REPARATION
       delete foreign key FK_REPARATI_CONCERNER_VEHICULE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='ALERTE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table ALERTE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='ASSURANCE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table ASSURANCE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='CONDUCTEUR'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table CONDUCTEUR
end if;

if exists(
   select 1 from sys.systable 
   where table_name='CONDUIRE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table CONDUIRE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='ENTRETIEN'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table ENTRETIEN
end if;

if exists(
   select 1 from sys.systable 
   where table_name='RAPPELL'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table RAPPELL
end if;

if exists(
   select 1 from sys.systable 
   where table_name='RAPPORT'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table RAPPORT
end if;

if exists(
   select 1 from sys.systable 
   where table_name='REPARATION'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table REPARATION
end if;

if exists(
   select 1 from sys.systable 
   where table_name='VEHICULE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table VEHICULE
end if;

/*==============================================================*/
/* Table : ALERTE                                               */
/*==============================================================*/
create table ALERTE 
(
   ID_NOTIFICATION      varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   TYPE_NOTIFICATION    varchar(60)                    null,
   DATE_NOTIFICATION    date                           null,
   DESCRIPTION_NOTIFICATION varchar(60)                    null,
   constraint PK_ALERTE primary key (ID_NOTIFICATION)
);

/*==============================================================*/
/* Table : ASSURANCE                                            */
/*==============================================================*/
create table ASSURANCE 
(
   ID_ASSURANCE         varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   NUM_POLICE_ASSURANCE varchar(60)                    null,
   DATE_EXPIRATION_ASSURANCE date                           null,
   constraint PK_ASSURANCE primary key (ID_ASSURANCE)
);

/*==============================================================*/
/* Table : CONDUCTEUR                                           */
/*==============================================================*/
create table CONDUCTEUR 
(
   ID_CONDUCTEUR        varchar(60)                    not null,
   NOM_CONDUCTEUR       varchar(60)                    null,
   PRENOM_CONDUCTEUR    varchar(60)                    null,
   NUM_PERMIS_CONDUCTEUR varchar(60)                    null,
   DATE_EXPIRATION_PERMIS_CONDUCTEUR date                           null,
   constraint PK_CONDUCTEUR primary key (ID_CONDUCTEUR)
);

/*==============================================================*/
/* Table : CONDUIRE                                             */
/*==============================================================*/
create table CONDUIRE 
(
   ID_CONDUCTEUR        varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   constraint PK_CONDUIRE primary key (ID_CONDUCTEUR, ID_VEHICULE)
);

/*==============================================================*/
/* Table : ENTRETIEN                                            */
/*==============================================================*/
create table ENTRETIEN 
(
   ID                   varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   ID_NOTIFICATION      varchar(60)                    not null,
   TYPE                 varchar(60)                    null,
   "DATE"               date                           null,
   COUT                 varchar(60)                    null,
   constraint PK_ENTRETIEN primary key (ID)
);

/*==============================================================*/
/* Table : RAPPELL                                              */
/*==============================================================*/
create table RAPPELL 
(
   ID_NOTIFICATION      varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   TYPE_NOTIFICATION    varchar(60)                    null,
   DATE_NOTIFICATION    date                           null,
   DESCRIPTION_NOTIFICATION varchar(60)                    null,
   constraint PK_RAPPELL primary key (ID_NOTIFICATION)
);

/*==============================================================*/
/* Table : RAPPORT                                              */
/*==============================================================*/
create table RAPPORT 
(
   ID_RAPPORT           varchar(60)                    not null,
   ID_CONDUCTEUR        varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   TYPE_RAPPORT         varchar(60)                    null,
   DATE_RAPPORT         date                           null,
   DESCRIPTION_RAPPORT  varchar(60)                    null,
   constraint PK_RAPPORT primary key (ID_RAPPORT)
);

/*==============================================================*/
/* Table : REPARATION                                           */
/*==============================================================*/
create table REPARATION 
(
   ID                   varchar(60)                    not null,
   ID_VEHICULE          varchar(60)                    not null,
   ID_NOTIFICATION      varchar(60)                    not null,
   TYPE                 varchar(60)                    null,
   "DATE"               date                           null,
   COUT                 varchar(60)                    null,
   constraint PK_REPARATION primary key (ID)
);

/*==============================================================*/
/* Table : VEHICULE                                             */
/*==============================================================*/
create table VEHICULE 
(
   ID_VEHICULE          varchar(60)                    not null,
   MARQUE_VEHICULE      varchar(60)                    null,
   MODELE_VEHICULE      varchar(60)                    null,
   ANNEE_FABRICATION_VEHICULE date                           null,
   IMMATRICULATION_VEHICULE varchar(60)                    null,
   KILOMETRAGE_VEHICULE varchar(60)                    null,
   NUM_CHASSIS          varchar(60)                    null,
   constraint PK_VEHICULE primary key (ID_VEHICULE)
);

alter table ALERTE
   add constraint FK_ALERTE_RECEVOIR_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table ASSURANCE
   add constraint FK_ASSURANC_SOUSCRIRE_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table CONDUIRE
   add constraint FK_CONDUIRE_CONDUIRE_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table CONDUIRE
   add constraint FK_CONDUIRE_CONDUIRE2_CONDUCTE foreign key (ID_CONDUCTEUR)
      references CONDUCTEUR (ID_CONDUCTEUR)
      on update restrict
      on delete restrict;

alter table ENTRETIEN
   add constraint FK_ENTRETIE_AFFECTER_ALERTE foreign key (ID_NOTIFICATION)
      references ALERTE (ID_NOTIFICATION)
      on update restrict
      on delete restrict;

alter table ENTRETIEN
   add constraint FK_ENTRETIE_AFFECTER3_RAPPELL foreign key (ID_NOTIFICATION)
      references RAPPELL (ID_NOTIFICATION)
      on update restrict
      on delete restrict;

alter table ENTRETIEN
   add constraint FK_ENTRETIE_CONCERNER_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table RAPPELL
   add constraint FK_RAPPELL_RECEVOIR2_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table RAPPORT
   add constraint FK_RAPPORT_ASSOCIER__VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

alter table RAPPORT
   add constraint FK_RAPPORT_AVOIR_CONDUCTE foreign key (ID_CONDUCTEUR)
      references CONDUCTEUR (ID_CONDUCTEUR)
      on update restrict
      on delete restrict;

alter table REPARATION
   add constraint FK_REPARATI_AFFECTER2_RAPPELL foreign key (ID_NOTIFICATION)
      references RAPPELL (ID_NOTIFICATION)
      on update restrict
      on delete restrict;

alter table REPARATION
   add constraint FK_REPARATI_AFFECTER4_ALERTE foreign key (ID_NOTIFICATION)
      references ALERTE (ID_NOTIFICATION)
      on update restrict
      on delete restrict;

alter table REPARATION
   add constraint FK_REPARATI_CONCERNER_VEHICULE foreign key (ID_VEHICULE)
      references VEHICULE (ID_VEHICULE)
      on update restrict
      on delete restrict;

