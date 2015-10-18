<?php
/*
 * 次の記事を参考にさせていただきました。
 * http://qiita.com/YasuOza/items/ddb5646571c69b8573f8
 * */

$request_file = $_SERVER["REQUEST_URI"];

if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js|otf|eot|svg|ttf|woff|woff2)/', $request_file)) {
    return false;
}

if (!preg_match('/\.(?:html|php)$/', $request_file)) {
    $request_file .= '/index.html';
}
else if (preg_match('/\/$/', $request_file)) {
    $request_file .= 'index.html';
}

require_once(__dir__ . $request_file);
?>

