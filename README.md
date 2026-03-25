This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Prueba Técnica – Frontend React + Next.js con enfoque en SEO 

 

Objetivo de la prueba 

Construir una aplicación frontend en Next.js que demuestre: 

Correcto uso de rendering orientado a SEO (SSR) 
Buen manejo de metadata dinámica 
Optimización de performance y Core Web Vitals 
Estructura de proyecto clara y escalable 
Buen criterio técnico en decisiones relacionadas con SEO  
Contexto del ejercicio 

Una empresa de contenido quiere lanzar un sitio de artículos informativos orientado a tráfico orgánico desde Google. 

El sitio tendrá: 

Un listado de artículos 
Una página de detalle por artículo 
Contenido 100% público (sin autenticación) 
El SEO es crítico para el negocio.  

 

Requisitos técnicos 

1. Stack obligatorio (CLAVE) 

Next.js (App Router o Pages Router) 
React 
TypeScript (deseable, no obligatorio)  
2. Páginas requeridas (CLAVE) 

a) Home / Listado de artículos 

Debe incluir: 

Listado de artículos (mínimo 5, pueden ser mock data) 
Título SEO (<title>) y meta description 
URLs amigables (ej: /articulos/seo-en-nextjs) 
Debe: 

Ser SSR
Ser completamente indexable 
 b) Página de detalle de artículo 

Debe incluir: 

Título del artículo como h1 
Contenido del artículo 
Metadata dinámica (title y description basados en el contenido) 
URL semántica basada en slug 
Debe: 

Ser SSR 
Renderizar el contenido en servidor 
 3. SEO técnico (CLAVE) 

La aplicación debe incluir: 

Metadata dinámica por página 
Uso correcto de encabezados (h1, h2, etc.) 
HTML semántico 
Manejo correcto de páginas 404 
 4. Performance (CLAVE) 

Debe demostrarse: 

Uso de next/image para imágenes 
Carga eficiente del contenido 
 5. Accesibilidad (CLAVE) 

Uso de HTML semántico 
Imágenes con alt 
Botones y links accesibles 
 Requisitos deseables (PLUS) 

(No obligatorios, pero suman puntos) 

Uso de generateMetadata (App Router) 
Implementación de robots.txt 
Datos estructurados (JSON-LD) 
Paginación SEO-friendly 
Datos 

Los artículos pueden: 

Ser mock data local 
O venir de un archivo JSON 
Ejemplo: 

id 
title 
slug 
description 
content 
No se evalúa diseño visual avanzado. 

Entregables 

Repositorio Git (GitHub, GitLab, etc.) 
README que incluya: 
Cómo correr el proyecto 
Decisiones técnicas tomadas 
Estrategia de rendering (SSR) 
Consideraciones SEO 