<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #073763 !important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{ $t('navbar.title') }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarText" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
        <span class="navbar-text">
          <button type="button" class="btn btn-primary btn-sm">
            <router-link :to="{name:'hotel-reservation'}" style="text-decoration: none;">
              {{ $t('reservation.new_reservation') }}
            </router-link>
          </button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
