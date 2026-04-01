<template>
  <q-page>
    <div class="row q-col-gutter-lg">
      <!-- Welcome Section -->
      <div class="col-12 q-mb-md">
        <h1 class="text-h1 q-mb-xs">Dashboard</h1>
        <p class="text-body1 text-grey-8">Bem-vindo ao AtomBank. Aqui está o resumo das suas finanças.</p>
      </div>

      <!-- Resumo do Extrato -->
      <div class="col-12 col-md-8">
        <q-card class="p-md fit">
          <div class="text-h3 q-mb-lg">Resumo do Extrato</div>
          
          <div class="row q-col-gutter-lg items-center">
            <div class="col-12 col-sm-4 border-right-sm">
              <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Saldo em conta</div>
              <div class="text-h2 text-primary">R$ 24.500,00</div>
            </div>
            
            <div class="col-12 col-sm-4 border-right-sm">
              <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Total de entradas</div>
              <div class="text-h2 text-positive">R$ 8.200,00</div>
            </div>

            <div class="col-12 col-sm-4">
              <div class="text-caption text-uppercase text-weight-bold text-grey-7 q-mb-xs">Total de saídas</div>
              <div class="text-h2 text-negative">R$ 3.450,00</div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Acesso Rápido -->
      <div class="col-12 col-md-4">
        <q-card class="p-md fit">
          <div class="text-h3 q-mb-lg">Acesso Rápido</div>
          
          <div class="row q-col-gutter-sm">
            <div class="col-6" v-for="item in quickAccess" :key="item.label">
              <q-btn
                flat
                class="full-width bg-grey-1 rounded-borders p-sm column items-center gap-sm text-center"
                no-caps
              >
                <q-icon :name="item.icon" size="24px" color="primary" />
                <div class="text-caption text-weight-bold text-grey-8">{{ item.label }}</div>
              </q-btn>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Gráficos -->
      <div class="col-12 col-md-7">
        <q-card class="p-md fit">
          <div class="row items-center justify-between q-mb-lg">
            <div class="text-h3">Fluxo Financeiro</div>
            <q-select
              v-model="periodo"
              :options="['Últimos 7 dias', 'Últimos 30 dias', 'Este Ano']"
              outlined
              dense
              class="q-w-sm"
              bg-color="white"
            />
          </div>
          <apexchart height="300" type="area" :options="areaOptions" :series="areaSeries" />
        </q-card>
      </div>

      <div class="col-12 col-md-5">
        <q-card class="p-md fit">
          <div class="text-h3 q-mb-lg">Gastos por Categoria</div>
          <div class="row items-center">
            <div class="col-12 col-sm-12">
              <apexchart height="300" type="donut" :options="donutOptions" :series="donutSeries" />
            </div>
          </div>
        </q-card>
      </div>

      <!-- Recent Transactions Table -->
      <div class="col-12">
        <q-card>
          <div class="q-pa-md row items-center justify-between border-bottom">
            <div class="text-h3">Transações Recentes</div>
            <q-btn color="primary" label="Ver Todas" flat class="text-weight-bold" no-caps />
          </div>

          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            binary-state-sort
            hide-pagination
            :rows-per-page-options="[0]"
          >
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <q-chip
                  :color="props.value === 'Concluído' ? 'positive' : 'warning'"
                  text-color="white"
                  size="sm"
                  class="text-weight-bold"
                >
                  {{ props.value }}
                </q-chip>
              </q-td>
            </template>
          </q-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const periodo = ref('Últimos 7 dias')

const quickAccess = [
  { label: 'Comprovante', icon: 'receipt_long' },
  { label: 'Agendamentos', icon: 'event' },
  { label: 'Depósito Boleto', icon: 'qr_code' },
  { label: 'Boletos Digitais', icon: 'description' }
]

const columns = [
  { name: 'date', label: 'Data', field: 'date', align: 'left' },
  { name: 'description', label: 'Descrição', field: 'description', align: 'left' },
  { name: 'amount', label: 'Valor', field: 'amount', align: 'right' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' },
]

const rows = [
  { id: 1, date: '31/03/2026', description: 'Pagamento de Aluguel', amount: '- R$ 2.500,00', status: 'Concluído' },
  { id: 2, date: '30/03/2026', description: 'Depósito PIX - João Silva', amount: '+ R$ 1.200,00', status: 'Concluído' },
  { id: 3, date: '29/03/2026', description: 'Supermercado Extra', amount: '- R$ 450,20', status: 'Processando' },
  { id: 4, date: '28/03/2026', description: 'Venda de Produto A', amount: '+ R$ 3.500,00', status: 'Concluído' },
]

// Configurações Gráfico de Área (Fluxo Financeiro)
const areaSeries = [
  { name: 'Entradas', data: [3100, 4000, 2800, 5100, 4200, 10900, 10000] },
  { name: 'Saídas', data: [1100, 3200, 4500, 3200, 3400, 5200, 4100] }
]

const areaOptions = {
  chart: { toolbar: { show: false }, zoom: { enabled: false }, fontFamily: 'Inter, sans-serif' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  colors: ['#22C55E', '#EF4444'],
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1, stops: [0, 90, 100] }
  },
  xaxis: {
    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { labels: { formatter: (val) => `R$ ${val}` } },
  grid: { borderColor: '#f1f1f1' },
  legend: { position: 'top', horizontalAlign: 'right' }
}

// Configurações Gráfico Donut (Categorias)
const donutSeries = [44, 15, 25, 30, 20, 10]
const donutOptions = {
  chart: { fontFamily: 'Inter, sans-serif' },
  labels: ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Compras', 'Outros'],
  colors: ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#6B7280'],
  legend: { position: 'bottom' },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          total: { show: true, label: 'Total', formatter: () => 'R$ 3.450' }
        }
      }
    }
  },
  dataLabels: { enabled: false }
}
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid $border-color;
}

@media (min-width: 600px) {
  .border-right-sm {
    border-right: 1px solid $border-color;
  }
}

.q-btn:hover {
  background: rgba($primary, 0.05) !important;
}
</style>
