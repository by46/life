<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li>
          <a href="../widgets.html">
            <i class="fa fa-th"></i> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li class="treeview active">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="/portal/general"><i class="fa fa-circle-o"></i> General</a></li>
            <li><a href="/portal/icons"><i class="fa fa-circle-o"></i> Icons</a></li>
            <li><a href="buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>
            <li class="active"><a href="sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>
            <li><a href="timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
            <li><a href="modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    name: 'lte-slider',
    props: {},
    created() {

    },
    computed: {},
    components: {}
  }
</script>
