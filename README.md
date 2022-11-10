LAB para criação de cloud function que copia arquivos entre buckets
============================

**Pré-requisitos**
- gcloud
- gsutil

**Setar projeto google cloud**
```bash
gcloud config set project des
```

**Setar Região**
```bash
gcloud config set run/region southamerica-east1
```

**Criar buckets**
```bash
gsutil mb -c standard -l southamerica-east1 gs://tt-input
gsutil mb -c nearline -l southamerica-east1 gs://tt-output
```

**Criar tópico com eventos no bucket**
```bash
gcloud storage buckets notifications create gs://tt-input --topic=tt-input-topic
```

**Enviar arquivos para o bucket de input**
```bash
gsutil rsync C:\temp\input-sync gs://tt-input
```

**Faça bom uso!**

