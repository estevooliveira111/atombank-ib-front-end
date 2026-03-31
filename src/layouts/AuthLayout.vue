<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row no-wrap items-stretch">
        <!-- Coluna Esquerda: Formulários -->
        <div class="col-12 col-md-5 flex flex-center bg-white p-lg">
          <div class="auth-card">
            <!-- Logo e Título -->
            <div class="text-center q-mb-xl">
              <div class="text-h2 text-primary text-weight-bold">ATOMBANK</div>
              <div class="text-body2 text-grey-7">O banco do futuro, hoje.</div>
            </div>

            <!-- Área de Roteamento (Login/Cadastro/Esqueci) -->
            <router-view />

            <!-- Rodapé Simples -->
            <div class="q-mt-xl text-center text-caption text-grey-6">
              &copy; 2026 AtomBank International. Todos os direitos reservados.
            </div>
          </div>
        </div>

        <!-- Coluna Direita: Seção Informativa (Split Screen) -->
        <div class="col-md-7 gt-sm relative-position overflow-hidden bg-primary text-white flex flex-center p-xl">
          <img
            src="~assets/auth_banner.png"
            class="absolute-full"
            style="object-fit: cover; opacity: 0.2;"
          />
          <div class="relative-position text-center z-top" style="max-width: 500px;">
            <q-icon name="security" size="80px" class="q-mb-lg" />
            <h2 class="text-h2 q-mb-md">Sua segurança é nossa prioridade</h2>
            <p class="text-body1 q-mb-xl opacity-80">
              Utilizamos as tecnologias de criptografia mais avançadas do mercado para garantir que seu patrimônio e dados estejam sempre protegidos.
            </p>

            <div class="row q-col-gutter-md text-left">
              <div class="col-6">
                <div class="text-weight-bold"><q-icon name="check_circle" /> PIX Instantâneo</div>
                <div class="text-caption opacity-70">Transfira em segundos, 24/7.</div>
              </div>
              <div class="col-6">
                <div class="text-weight-bold"><q-icon name="check_circle" /> Rendimento 100% CDI</div>
                <div class="text-caption opacity-70">Seu dinheiro rende parado.</div>
              </div>
              <div class="col-6">
                <div class="text-weight-bold"><q-icon name="check_circle" /> Cartão Global</div>
                <div class="text-caption opacity-70">Use em qualquer lugar do mundo.</div>
              </div>
              <div class="col-6">
                <div class="text-weight-bold"><q-icon name="check_circle" /> Suporte VIP 24h</div>
                <div class="text-caption opacity-70">Estamos sempre aqui para você.</div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.auth-card {
  width: 100%;
  max-width: 400px;
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-70 {
  opacity: 0.7;
}

.z-top {
  z-index: 10;
}
</style>
