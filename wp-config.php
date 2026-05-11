<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '!1]/Xxf6~JG50^i9{_TE$D9}xPTff{uAt7+Gm|cY14[_a5 clL3my9?u~JEZc%_2' );
define( 'SECURE_AUTH_KEY',   'P:Y5q5kp[_={gs#~+w_VuwF|x9H%rzD]JZ^Sk*jwv`TgUTTRs28}x}jy@uh3&b.)' );
define( 'LOGGED_IN_KEY',     'WZT:@kV;;IORIqs<eHt+N-3)/fyuNZg~Qyom&%DzsKmmli{_AIEs_#Tz$;~hmUP-' );
define( 'NONCE_KEY',         'T8D#Mgs2yYOs.L#dxU,K M}]b&{Z5xI@K*_lAt!;3rrgn.U0I)aR/>ozg@Br5]B6' );
define( 'AUTH_SALT',         'B>DV:e7!YxuvxgP!Y2+O`4{2JNw1!~/uT/->5NkR)St2,Z-BZf0^J5^(/5BWV`(,' );
define( 'SECURE_AUTH_SALT',  'rBi1qd&DEp@^a #AP[E]frKt+rF`9et3{!`^d_p7$5h$x8pAS^|}ln6[/Oo{FCFW' );
define( 'LOGGED_IN_SALT',    'w!t1s<Kx;*L,jNf>E#KjO^EcXe@:t$={*&Z[yWrP$gxJD(,CFKq7mXk8`h75|mh)' );
define( 'NONCE_SALT',        'pj8tJUrrk$H9e>{.y4o`2$x]{Pta;wuLgQrPD%_[Umz_b%2i.Xlq10:Adg~:+8^I' );
define( 'WP_CACHE_KEY_SALT', 'lUVv&eYSWDP1,< h{QWQ7Kt%L?J.whnJ**x/HcgOAZsS%>%yEQ4YxxlF(T{eq5p~' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
