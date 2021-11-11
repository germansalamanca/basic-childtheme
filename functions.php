<?php

// Add theme stylesheets, jquery and js
function pb_scripts(){
    $version = '0.0.0';
    wp_enqueue_style('pb-estilo', get_stylesheet_directory_uri() . '/css/estilo.css', array(), $version );
    wp_enqueue_script('pb-scripts', get_stylesheet_directory_uri() . '/js/scripts.js', array('jquery'), $version );
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'pb_scripts');
