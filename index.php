<!DOCTYPE html>
<html lang="en" class="u-grid u-height-100 u-bgcolor-purple">

<head>
    <meta charset="UTF-8">
    <title>SCSS Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/dist/css/main.css">
    <script src="/dist/js/bundle.js"></script>
</head>

<body class="u-grid">

    <div class="o-document o-container">

        <?php require 'components/headers/header_brand.php'; ?>
        <?php require 'components/headers/header_blank.php'; ?>
        <?php require 'components/headers/header_root_variables.php'; ?>

        <?php require 'components/grids/grid_intro.php'; ?>
        <?php require 'components/grids/grid_container_fadeupin.php'; ?>
        <?php require 'components/grids/grid_container_showclass.php'; ?>
        <?php require 'components/grids/grid_container.php'; ?>
        <?php require 'components/grids/grid_split_columns_animate.php'; ?>
        <?php require 'components/grids/grid_show_columnunits.php'; ?>
        <?php require 'components/grids/grid_show_gutterunits.php'; ?>

        <footer class="u-flex u-ai-center">
            <?php require 'components/buttons/button_start_demo.php'; ?>
            <?php require 'components/buttons/button_demo_container_1.php'; ?>
            <?php require 'components/buttons/button_demo_container_2.php'; ?>
        </footer>

    </div>

</body>
</html>
