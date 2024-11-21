CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `codCliente` bigint NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(40) NOT NULL,
  `sobrenomeCliente` varchar(80) NOT NULL,
  `cpfCliente` varchar(14) NOT NULL,
  `telefoneCliente` varchar(15) NOT NULL,
  `emailCliente` varchar(60) NOT NULL,
  `logradouro` varchar(60) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `complemento` varchar(40) NOT NULL,
  `bairro` varchar(40) NOT NULL,
  `localidade` varchar(40) NOT NULL,
  `uf` varchar(40) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `statusCliente` varchar(20) NOT NULL,
  PRIMARY KEY (`codCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entregas`
--

DROP TABLE IF EXISTS `entregas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregas` (
  `codEntrega` bigint NOT NULL AUTO_INCREMENT,
  `pedidoId` bigint NOT NULL,
  `nomeProduto` varchar(40) NOT NULL,
  `quantidadeProduto` int NOT NULL,
  `dataEntrega` datetime NOT NULL,
  PRIMARY KEY (`codEntrega`),
  KEY `pedidoId` (`pedidoId`),
  CONSTRAINT `entregas_ibfk_1` FOREIGN KEY (`pedidoId`) REFERENCES `pedidos` (`codPedido`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregas`
--

LOCK TABLES `entregas` WRITE;
/*!40000 ALTER TABLE `entregas` DISABLE KEYS */;
/*!40000 ALTER TABLE `entregas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoques`
--

DROP TABLE IF EXISTS `estoques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estoques` (
  `codEstoque` bigint NOT NULL AUTO_INCREMENT,
  `produtoId` bigint NOT NULL,
  `nomeProduto` varchar(40) NOT NULL,
  `quantidadeEstoque` int NOT NULL,
  PRIMARY KEY (`codEstoque`),
  KEY `produtoId` (`produtoId`),
  CONSTRAINT `estoques_ibfk_1` FOREIGN KEY (`produtoId`) REFERENCES `produtos` (`codProduto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoques`
--

LOCK TABLES `estoques` WRITE;
/*!40000 ALTER TABLE `estoques` DISABLE KEYS */;
/*!40000 ALTER TABLE `estoques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fabricantes`
--

DROP TABLE IF EXISTS `fabricantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fabricantes` (
  `codFabricante` bigint NOT NULL AUTO_INCREMENT,
  `nomeFabricante` varchar(40) NOT NULL,
  `marcaFabricante` varchar(80) NOT NULL,
  `cnpjFabricante` varchar(14) NOT NULL,
  `telefoneFabricante` varchar(15) NOT NULL,
  `emailFabricante` varchar(60) NOT NULL,
  `logradouro` varchar(60) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `complemento` varchar(40) NOT NULL,
  `bairro` varchar(40) NOT NULL,
  `localidade` varchar(40) NOT NULL,
  `uf` varchar(40) NOT NULL,
  `cep` varchar(10) NOT NULL,
  PRIMARY KEY (`codFabricante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fabricantes`
--

LOCK TABLES `fabricantes` WRITE;
/*!40000 ALTER TABLE `fabricantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `fabricantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itempedidos`
--

DROP TABLE IF EXISTS `itempedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itempedidos` (
  `codItemPedido` bigint NOT NULL AUTO_INCREMENT,
  `pedidoId` bigint NOT NULL,
  `produtoId` bigint NOT NULL,
  `quantidadeProduto` int NOT NULL,
  `precoProduto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`codItemPedido`),
  KEY `pedidoId` (`pedidoId`),
  KEY `produtoId` (`produtoId`),
  CONSTRAINT `itempedidos_ibfk_1` FOREIGN KEY (`pedidoId`) REFERENCES `pedidos` (`codPedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `itempedidos_ibfk_2` FOREIGN KEY (`produtoId`) REFERENCES `produtos` (`codProduto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itempedidos`
--

LOCK TABLES `itempedidos` WRITE;
/*!40000 ALTER TABLE `itempedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `itempedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS `pagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamentos` (
  `codPagamento` bigint NOT NULL AUTO_INCREMENT,
  `pedidoId` bigint NOT NULL,
  `dataVencimento` datetime NOT NULL,
  `valorPagamento` decimal(10,2) NOT NULL,
  PRIMARY KEY (`codPagamento`),
  KEY `pedidoId` (`pedidoId`),
  CONSTRAINT `pagamentos_ibfk_1` FOREIGN KEY (`pedidoId`) REFERENCES `pedidos` (`codPedido`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES `pagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `codPedido` bigint NOT NULL AUTO_INCREMENT,
  `clienteId` bigint NOT NULL,
  `dataPedido` datetime NOT NULL,
  `valorPedido` decimal(10,2) NOT NULL,
  PRIMARY KEY (`codPedido`),
  KEY `clienteId` (`clienteId`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`codCliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `codProduto` bigint NOT NULL AUTO_INCREMENT,
  `fabricanteId` bigint NOT NULL,
  `nomeProduto` varchar(40) NOT NULL,
  `quantidadeProduto` int NOT NULL,
  `precoProduto` decimal(10,2) NOT NULL,
  `descricaoProduto` varchar(40) NOT NULL,
  PRIMARY KEY (`codProduto`),
  KEY `fabricanteId` (`fabricanteId`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`fabricanteId`) REFERENCES `fabricantes` (`codFabricante`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reabastecimentos`
--

DROP TABLE IF EXISTS `reabastecimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reabastecimentos` (
  `codReabastecimento` bigint NOT NULL AUTO_INCREMENT,
  `estoqueId` bigint NOT NULL,
  `nomeProduto` varchar(40) NOT NULL,
  `quantidadeEstoque` int NOT NULL,
  `dataReabastecimento` datetime NOT NULL,
  PRIMARY KEY (`codReabastecimento`),
  KEY `estoqueId` (`estoqueId`),
  CONSTRAINT `reabastecimentos_ibfk_1` FOREIGN KEY (`estoqueId`) REFERENCES `estoques` (`codEstoque`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reabastecimentos`
--

LOCK TABLES `reabastecimentos` WRITE;
/*!40000 ALTER TABLE `reabastecimentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `reabastecimentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 12:16:09
