<div
    data-id="grid-show-columnunits"
    data-group="grids"

    class="c-demo--container-2 u-relative u-flex u-jc-between">

    <?php for ($k = 0 ; $k < 12; $k++) : ?>

        <div class="u-columnspan-1 u-bgcolor-burn u-flex u-ai-center u-jc-center"></div>

    <?php endfor; ?>

    <div class="u-absolute u-width-100 u-anim-fadeupin" style="margin-top: 1rem;">

        <div class="u-flex u-jc-between">

            <?php for ($k = 0 ; $k < 12; $k++) : ?>
                <div class="c-span c-span--filled u-columnspan-1"></div>
            <?php endfor; ?>

        </div>

        <dl class="u-columnspan-10 u-mh-auto">
            <dt><code>Column</code></dt>
            <dd><code>var(--ColumnUnit)</code></dd>
        </dl>
    </div>

</div>
