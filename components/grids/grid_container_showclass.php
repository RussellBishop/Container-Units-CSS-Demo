<div
    data-id="grid-container-showclass"
    data-group="grids"

    class="c-demo--container-2 u-relative u-flex u-jc-between">

    <?php for ($k = 0 ; $k < 12; $k++) : ?>

        <div class="u-columnspan-1 u-width-100 u-bgcolor-burn u-flex u-ai-center u-jc-center"></div>

    <?php endfor; ?>

    <div class="u-absolute u-width-100 u-anim-fadeupin" style="margin-top: 1rem;">
        <div class="c-span c-span--filled u-width-100"></div>

        <dl class="u-columnspan-10 u-mh-auto">
            <dt><code>.container</code></dt>
            <dd><code>width: var(—ContainerWidth)</code></dd>
        </dl>
    </div>

</div>
