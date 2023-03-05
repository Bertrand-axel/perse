-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: perse
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `origin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `town` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `starting_year` int NOT NULL,
  `separation_year` int DEFAULT NULL,
  `founder` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `members` int DEFAULT NULL,
  `musical_current` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `presentation` varchar(2500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (1,'The Beatles','Royaume-Uni ','Liverpool',1960,1970,'John Lennon',4,NULL,'The Beatles [ðə ˈbiːtəlz] est un quatuor musical britannique originaire de Liverpool, en Angleterre. Le noyau du groupe se forme avec les Quarrymen fondés ...'),(2,'Indochine','France','paris',1981,NULL,'Nicola Sirkis et Dominique Nicolas',5,'pop rock','Indochine est un groupe de pop rock français originaire de Paris, formé par Nicola Sirkis et Dominique Nicolas en 1981. Le groupe est issu du courant new wave'),(3,'Noir Désir','France','bordeaux',1980,2010,'Bertrand Cantat',4,'rock','Noir Désir est un groupe de rock français, originaire de Bordeaux, en Gironde. Formé dans les années 1980, et dissout en 2010, il se compose de Bertrand Cantat, Denis Barthe, Serge Teyssot-Gay et Frédéric Vidalenc remplacé par Jean-Paul Roy à partir de 1996'),(4,'Nirvana','Etats-unis','Aberdeen',1987,1994,'Kurt Cobain',3,'grunge','Nirvana est un groupe de grunge américain, originaire d\'Aberdeen, dans l\'État de Washington, formé en 1987 par le chanteur-guitariste Kurt Cobain et le bassiste Krist Novoselic'),(5,'Led Zeppelin','Royaume-Uni ','Londres',1968,1980,'Jimmy Page',NULL,'rock','Led Zeppelin [lɛd ˈzɛpələn] est un groupe britannique de rock, originaire de Londres, en Angleterre. Il est fondé en 1968 par Jimmy Page, avec Robert Plant, John Paul Jones et John Bonham, et dissout à la suite de la mort de ce dernier, en 1980'),(6,'Depeche Mode','Royaume-Uni ','Basildon',1980,NULL,NULL,3,'rock','Depeche Mode est un groupe britannique de new wave et rock alternatif, originaire de Basildon, dans l\'Essex, en Angleterre. Formé en 1980, le groupe apparait au sein du courant de la synthpop et devient rapidement influent et populaire sur la scène internationale. Son nom provient d\'un magazine français, Dépêche Mode'),(7,'Téléphone','France','Paris',1976,1986,NULL,4,'rock','Téléphone est un groupe de rock français. Il est formé le 12 novembre 1976 et séparé le 21 avril 1986. Composé de Jean-Louis Aubert, Louis Bertignac, Corine Marienneau et Richard Kolinka, il connaît un énorme succès dès ses débuts avec plusieurs tubes et des tournées très populaires'),(8,'Massive Attack','Royaume-Uni ','bristol',1987,NULL,NULL,NULL,'Trip hop','Massive Attack est un groupe musical britannique, originaire de Bristol, précurseur de la musique trip hop. Il se compose, à l\'origine, de Robert Del Naja, Grant Marshall et Andrew Vowles'),(9,'Pink Floyd','Royaume-Uni ','Londres',1964,2014,'Syd Barrett,',3,'rock','Pink Floyd [pɪŋk flɔɪd] est un groupe britannique de rock originaire de Londres. Le groupe débute avec un premier album de musique psychédélique pour ensuite bifurquer vers le rock progressif. Formé en 1965, il est considéré comme un pionnier et représentant majeur de ces styles musicaux.');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-05 17:25:07
