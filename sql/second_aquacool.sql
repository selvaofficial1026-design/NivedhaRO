-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 09:19 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `second_aquacool`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `name`, `slug`, `district`, `city`, `adress`, `email`, `phone`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Aqua_Cool Galewela', 'aqua-cool-galewela', 'Mathale', 'Galewela', 'Aqua_cool, Kurunegala Road, Galewela.', 'AquaCoolG@gmail.com', '0664785214', '1688325207.jpg', '2023-07-02 13:43:27', '2023-07-02 13:43:27'),
(2, 'Aqua_Cool Kurunegala', 'aqua-cool-kurunegala', 'Kurunegala', 'Kurunegala', 'Aqua_cool, Colombo Road, Kurunegala.', 'AquaCoolKur@gmail.com', '0669874547', '1688361818.jpg', '2023-07-02 23:53:38', '2023-07-02 23:53:38');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=visible,1=hidden',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_name`, `brand_slug`, `brand_image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Aqua_Cool', 'aqua-cool', '1687687846.jpg', 0, '2023-06-25 04:40:46', '2023-06-25 04:40:46'),
(2, 'Aqua_Fresh', 'aqua-fresh', '1687689784.jpg', 0, '2023-06-25 05:13:04', '2023-06-25 06:16:21'),
(4, 'Olu', 'olu', '1688706378.jpg', 0, '2023-07-06 23:36:19', '2023-07-06 23:36:19'),
(5, 'Elephant_House', 'elephant-house', '1688706395.jpg', 0, '2023-07-06 23:36:35', '2023-07-06 23:36:35');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keyword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=visible,1=hidden',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `image`, `meta_title`, `meta_keyword`, `meta_description`, `status`, `created_at`, `updated_at`) VALUES
(2, '500-ml Bottle', '500-ml-bottle', 'water Bottles with Capacity 500 Mili Liters Update', 'uploads/category/1687456435.jpg', '500-ml Bottle', 'This is a Description water Bottles with Capacity 	500-ml Bottle', 'This is a Description water Bottles with Capacity 	500-ml Bottle', 0, '2023-06-21 12:30:20', '2023-06-22 12:28:04'),
(4, '1-L Bottle', '1-l-bottle', 'water Bottles with Capacity 1 Liters', 'uploads/category/1687673760.jpg', '1-L Bottle', 'water Bottles with Capacity 1 Liters', 'water Bottles with Capacity 1 Liters', 0, '2023-06-23 09:52:10', '2023-06-25 00:46:00'),
(5, '2-L Bottle', '2-l-bottle', 'water Bottles with Capacity 2 Liters', 'uploads/category/1688706317.jpg', '2-L Bottle', '2-L Bottle', 'water Bottles with Capacity 2 Liters', 0, '2023-07-06 23:35:17', '2023-07-06 23:35:17'),
(6, '5-L Bottle Update', '5-l-bottle', 'water Bottles with Capacity 5 Liters', 'uploads/category/1688719885.jpg', '5-L Bottle', '5-L Bottle', 'water Bottles with Capacity 5 Liters', 0, '2023-07-06 23:35:45', '2023-07-07 03:21:25');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_06_18_113540_add_details_to_users_table', 2),
(7, '2023_06_20_173113_create_categories_table', 3),
(8, '2023_06_23_170035_create_brands_table', 4),
(9, '2023_06_24_045115_create_brands_table', 5),
(10, '2023_06_25_070622_create_brands_table', 6),
(11, '2023_06_26_182147_create_product_table', 7),
(12, '2023_06_26_183557_create_product_images_table', 7),
(13, '2023_06_30_130002_create_sliders_table', 8),
(14, '2023_07_02_121115_create_suplier_table', 9),
(15, '2023_07_02_182139_create_branch_table', 10),
(16, '2023_07_03_062207_create_slider_table', 11),
(17, '2023_07_06_081248_create_carts_table', 12),
(18, '2023_07_06_181336_create_orders_table', 13),
(19, '2023_07_06_181726_create_order_items_table', 13),
(20, '2023_07_07_052902_create_user_details_table', 14);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `tracking_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pincode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_mode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `tracking_no`, `fullname`, `email`, `phone`, `pincode`, `address`, `status_message`, `payment_mode`, `payment_id`, `created_at`, `updated_at`) VALUES
(1, 2, 'Aqua-cool-FYtbJeLTKx', 'Sumedha', 'sumnew2i@gmail.com', '0745896587', '200011', 'No.205,Dalada Road, Kandy', 'in progress', 'Cash On Delivery', NULL, '2023-07-06 13:20:47', '2023-07-06 19:28:10'),
(2, 3, 'Aqua-cool-eoHz3u8kHq', 'Damruwan', 'chinthig2@gmail.com', '0775896325', '254563', 'Vahakotta road, Dambulla.', 'completed', 'Cash On Delivery', NULL, '2023-07-06 23:15:54', '2023-07-07 01:59:19'),
(3, 3, 'Aqua-cool-2C8x4wY5sv', 'Damruwan', 'chinthig2@gmail.com', '0778542365', '124583', 'Kurunegala road, Galewela', 'completed', 'Cash On Delivery', NULL, '2023-07-06 23:46:53', '2023-07-07 03:22:58'),
(4, 3, 'Aqua-cool-hhaTUypUvr', 'Damruwan', 'chinthig2@gmail.com', '0775337666', '213000', 'diulgaskotuva,Galewela', 'in progress', 'Cash On Delivery', NULL, '2023-07-07 03:26:43', '2023-07-07 03:26:43'),
(8, 2, 'Aqua-cool-HfkDLi9BW0', 'Sumedha', 'sumnew2i@gmail.com', '0775998541', '212001', 'galewela', 'in progress', 'Cash On Delivery', NULL, '2023-07-10 15:18:19', '2023-07-10 15:18:19'),
(9, 2, 'Aqua-cool-aUX1YYzm7I', 'Sumedha', 'sumnew2i@gmail.com', '0775337666', '212001', 'Galewela', 'in progress', 'Cash On Delivery', NULL, '2023-07-10 23:47:50', '2023-07-10 23:47:50');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_color_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_color_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(1, 1, 4, NULL, 1, 150, '2023-07-06 13:20:47', '2023-07-06 13:20:47'),
(2, 1, 5, NULL, 1, 300, '2023-07-06 13:20:47', '2023-07-06 13:20:47'),
(3, 2, 5, NULL, 2, 300, '2023-07-06 23:15:54', '2023-07-06 23:15:54'),
(4, 2, 4, NULL, 2, 150, '2023-07-06 23:15:54', '2023-07-06 23:15:54'),
(5, 3, 7, NULL, 3, 300, '2023-07-06 23:46:53', '2023-07-06 23:46:53'),
(6, 3, 5, NULL, 2, 200, '2023-07-06 23:46:53', '2023-07-06 23:46:53'),
(7, 4, 4, NULL, 3, 100, '2023-07-07 03:26:43', '2023-07-07 03:26:43'),
(8, 5, 7, NULL, 6, 180, '2023-07-10 10:15:21', '2023-07-10 10:15:21'),
(9, 6, 7, NULL, 2, 180, '2023-07-10 14:39:02', '2023-07-10 14:39:02'),
(10, 7, 4, NULL, 2, 100, '2023-07-10 14:56:18', '2023-07-10 14:56:18'),
(11, 8, 7, NULL, 1, 180, '2023-07-10 15:18:19', '2023-07-10 15:18:19'),
(12, 9, 4, NULL, 7, 100, '2023-07-10 23:47:50', '2023-07-10 23:47:50');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('chinthig2@gmail.com', '$2y$10$3m/n8/t7lC10ti94DzjIcOe8QIgtXb814vC54DPZaf4P8LrzvedJC', '2023-09-02 08:54:40');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `small_description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` int(11) NOT NULL,
  `selling_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `trending` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=trending,1=not-trending',
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=visible,1=hidden',
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keyword` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `name`, `slug`, `brand`, `small_description`, `original_price`, `selling_price`, `quantity`, `trending`, `status`, `meta_title`, `meta_keyword`, `created_at`, `updated_at`) VALUES
(4, 2, 'Aqua_Fresh 500_ml Minaral', 'aqua-fresh-500-ml', 'Aqua_Fresh', 'Aqua_Fresh 500_ml minaral water bottle', 150, 100, 1, 0, 0, 'Aqua_Fresh 500_ml', 'Aqua_Fresh 500_ml', '2023-06-29 22:22:52', '2023-07-10 23:47:50'),
(5, 4, 'Aqua_Fresh 1_L Minaral', 'aqua-fresh-1-l', 'Aqua_Fresh', 'Aqua_Fresh 1_L Minaral Water bottle', 300, 200, 6, 0, 0, '1-L Bottle', 'Aqua_Fresh 1_L Minaral', '2023-06-29 22:51:17', '2023-07-06 23:46:53'),
(7, 4, 'Olu 1-L Minaral', 'olu-1-l-minaral', 'Olu', 'Olu 1-L  Minaral water', 250, 180, 3, 0, 0, 'Olu 1-L Minaral', 'Olu 1-L Minaral', '2023-07-06 23:40:01', '2023-07-10 15:18:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image`, `created_at`, `updated_at`) VALUES
(4, 4, 'uploads/products/16880971721.jpg', '2023-06-29 22:22:52', '2023-06-29 22:22:52'),
(5, 4, 'uploads/products/16880971722.jpg', '2023-06-29 22:22:52', '2023-06-29 22:22:52'),
(6, 5, 'uploads/products/16880988771.jpg', '2023-06-29 22:51:17', '2023-06-29 22:51:17'),
(7, 5, 'uploads/products/16880988772.jpg', '2023-06-29 22:51:17', '2023-06-29 22:51:17'),
(13, 7, 'uploads/products/16887066011.jpg', '2023-07-06 23:40:01', '2023-07-06 23:40:01');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '1=hidden,0=visible',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title`, `description`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, '<span>Pure Water </span>Delivery Service..', 'We now delivery different types of water Bottled Water.', 'uploads/slider/1693980700.png', 0, '2023-07-03 01:30:41', '2023-09-06 00:41:40'),
(4, '<span>Pure & Health Water </span>Make Your Life Healthy..', 'Choise is Yours.......!', 'uploads/slider/1693925252.png', 0, '2023-07-03 02:41:24', '2023-09-05 23:53:52'),
(5, '<span>We Deliver to</span>Your Doorsteps..', 'Fast Delivery Service.......', 'uploads/slider/1693980776.png', 0, '2023-09-05 09:18:14', '2023-09-06 00:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `suplier`
--

CREATE TABLE `suplier` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suplier`
--

INSERT INTO `suplier` (`id`, `name`, `slug`, `city`, `adress`, `email`, `phone`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Aqua Fresh', 'aqua-fresh', 'Colombo', 'Aqua Fresh, Colombo.', 'Aquafreshh@gmail.com', '0118745896', 'Best Bottled Water Supplier in Sri Lanka.', '2023-07-02 08:17:51', '2023-07-02 09:38:33'),
(2, 'Aqua Cool', 'aqua-cool', 'Colombo', 'Aqua Cool, Highlevel road , Colombo.', 'AquacoolH@gmail.com', '0118745844', 'Best minaral Bottled Water Supplier in Sri Lanka.', '2023-07-02 09:40:10', '2023-07-02 09:40:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_as` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=user,1=admin,2=Staff'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role_as`) VALUES
(2, 'Sumedha', 'sumnew2i@gmail.com', NULL, '$2y$10$Hpw/A2id.nFTL5S.5gHVRevxgV3zcSJ1AoWpdKy5Sr7wpjVPVp5cy', '7vdC1qG3Y6SJJtzbB8e0MlW4pO6zmpDqjMIvfNhDdNGAs7MAypjtLG6JB3bC', '2023-06-18 06:46:34', '2023-08-31 09:41:31', 1),
(4, 'Damruwan', 'chinthig2@gmail.com', NULL, '$2y$10$fgtLG8sz7h0LW5sB2IZl3Oj4IMG0hL0lepCY.IC5WofXWQ3vIqwtS', NULL, '2023-08-31 09:43:41', '2023-08-31 09:43:41', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_images_product_id_foreign` (`product_id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suplier`
--
ALTER TABLE `suplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_details_user_id_unique` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `suplier`
--
ALTER TABLE `suplier`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_details`
--
ALTER TABLE `user_details`
  ADD CONSTRAINT `user_details_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
