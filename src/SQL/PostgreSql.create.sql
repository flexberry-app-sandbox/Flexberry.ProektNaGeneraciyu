﻿




CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 КодДолжности INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЦелеваяАудит (
 primaryKey UUID NOT NULL,
 Пол VARCHAR(255) NULL,
 Национальн VARCHAR(255) NULL,
 Возраст INT NULL,
 СемейнПол VARCHAR(255) NULL,
 Образование VARCHAR(255) NULL,
 ДатаРожд VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Маркетолог (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Спрос UUID NOT NULL,
 ОсновПоказат UUID NOT NULL,
 ЦелеваяАудит UUID NOT NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОсновПоказат (
 primaryKey UUID NOT NULL,
 ВыручЗаГостя INT NULL,
 СрЦена INT NULL,
 ВыручЗаОдинН INT NULL,
 ВыручкаОбщ INT NULL,
 СрКолвоГостВНо INT NULL,
 Заполняемость INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Персонал (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Спрос (
 primaryKey UUID NOT NULL,
 КатегорНомера INT NULL,
 СкДр BOOLEAN NULL,
 Цена INT NULL,
 БроньЧерСайт BOOLEAN NULL,
 СкПриДлитПрож BOOLEAN NULL,
 ЗанятВМесяц INT NULL,
 СуммСоСкид INT NULL,
 Номер INT NULL,
 СкВторНомер BOOLEAN NULL,
 Юридич BOOLEAN NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Маркетолог ADD CONSTRAINT FK2126d85be62a09bfd2225161534550441b43fe51 FOREIGN KEY (Спрос) REFERENCES Спрос; 
CREATE INDEX Index2126d85be62a09bfd2225161534550441b43fe51 on Маркетолог (Спрос); 

 ALTER TABLE Маркетолог ADD CONSTRAINT FK2a7640669ddfcc7c0f3723a5ba2d203082cdd682 FOREIGN KEY (ОсновПоказат) REFERENCES ОсновПоказат; 
CREATE INDEX Index2a7640669ddfcc7c0f3723a5ba2d203082cdd682 on Маркетолог (ОсновПоказат); 

 ALTER TABLE Маркетолог ADD CONSTRAINT FK33ce6b0348d19924f1e571276f3c18664cabe445 FOREIGN KEY (ЦелеваяАудит) REFERENCES ЦелеваяАудит; 
CREATE INDEX Index33ce6b0348d19924f1e571276f3c18664cabe445 on Маркетолог (ЦелеваяАудит); 

 ALTER TABLE Маркетолог ADD CONSTRAINT FK73ce8b66277ed19e7d4aad4270374870bb68fbc9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index73ce8b66277ed19e7d4aad4270374870bb68fbc9 on Маркетолог (Должность); 

 ALTER TABLE Персонал ADD CONSTRAINT FK2cebfd799cb04684935c40ea7f9e4666e6ec424b FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index2cebfd799cb04684935c40ea7f9e4666e6ec424b on Персонал (Должность); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

