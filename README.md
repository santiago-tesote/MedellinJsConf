# 🚀 React Server Components - Aplicación de Conferencia

Aplicación educativa completa creada para la conferencia **"React Server Components - La nueva era del renderizado en React"** de MedellinJS 2025.

> **Nota**: Esta app se hizo en una noche con mucho café ☕. Es funcional, educativa, y (espero) fácil de entender. No todo tiene que ser perfecto para enseñar bien 😊

## 📋 Descripción

Esta aplicación demuestra de forma práctica e interactiva las diferencias entre:

- **Client-Side Rendering (CSR)**
- **Server-Side Rendering (SSR)**
- **React Server Components (RSC)**
- **Server Actions**
- **Testing en Next.js 14+**

## 🛠️ Stack Tecnológico

- **Next.js 14+** con App Router
- **React 18+** con Server Components
- **TypeScript**
- **Tailwind CSS**
- **Jest** + **React Testing Library**

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Con coverage
npm test -- --coverage

# Modo watch
npm test -- --watch
```

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Ejecutar build
npm start
```

## 📁 Estructura del Proyecto

```
rsc-conference-app/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal (landing)
│   ├── csr/                 # Ejemplo de CSR
│   │   └── page.tsx
│   ├── ssr/                 # Ejemplo de SSR
│   │   └── page.tsx
│   ├── rsc/                 # Ejemplo de RSC
│   │   └── page.tsx
│   ├── actions/             # Ejemplo de Server Actions
│   │   ├── page.tsx
│   │   ├── actions.ts       # Server Actions
│   │   ├── RestaurantForm.tsx
│   │   └── RestaurantList.tsx
│   ├── comparison/          # Tabla comparativa
│   │   └── page.tsx
│   ├── testing/             # Explicación de testing
│   │   └── page.tsx
│   └── api/                 # API Routes
│       └── restaurants/
│           └── route.ts
├── components/              # Componentes reutilizables
│   └── RestaurantCard.tsx
├── lib/                     # Utilidades y datos
│   └── data.ts             # Mock data y funciones
├── __tests__/              # Tests
│   ├── lib/
│   │   └── data.test.ts
│   └── components/
│       └── RestaurantCard.test.tsx
├── jest.config.js          # Configuración de Jest
├── jest.setup.js           # Setup de Jest
└── README.md               # Este archivo
```

## 🎯 Páginas y Ejemplos

### 1. **Página Principal** (`/`)
- Introducción a los conceptos
- Enlaces a todos los ejemplos
- Explicación visual de CSR, SSR y RSC

### 2. **Client-Side Rendering** (`/csr`)
- Usa `'use client'` + `useEffect` + `fetch`
- Simula carga de datos con API endpoint
- Muestra spinner durante 3 segundos
- **Demo**: Presiona `Ctrl+U` para ver que no hay datos en el HTML

### 3. **Server-Side Rendering** (`/ssr`)
- Componente async que obtiene datos en el servidor
- HTML completo generado por cada request
- Delay de 2 segundos para simular consulta a DB
- **Demo**: Presiona `Ctrl+U` para ver los datos en el HTML

### 4. **React Server Components** (`/rsc`)
- Componente async puro del servidor
- Usa `Suspense` para streaming rendering
- Delay de 3 segundos con loading state
- No envía código del componente al cliente
- **Demo**: Código nunca se expone al navegador

### 5. **Server Actions** (`/actions`)
- Formulario para crear restaurantes
- Usa `'use server'` en `actions.ts`
- No necesita API routes
- Revalidación automática con `revalidatePath`
- **Demo**: Crea un restaurante y verás la lista actualizarse

### 6. **Testing** (`/testing`)
- Explicación de testing en Next.js 14+
- Ejemplos de unit tests y component tests
- Comandos para ejecutar tests
- Mejores prácticas

### 7. **Comparación** (`/comparison`)
- Tabla comparativa detallada
- CSR vs SSR vs RSC
- Cuándo usar cada uno
- Recomendaciones para 2025

## 🧪 Testing

### Tests Incluidos

#### Unit Tests
```typescript
// __tests__/lib/data.test.ts
- ✅ Verifica funciones de datos
- ✅ Testa getRestaurants()
- ✅ Testa addRestaurant()
- ✅ Simula delays
```

#### Component Tests
```typescript
// __tests__/components/RestaurantCard.test.tsx
- ✅ Renderizado de componentes
- ✅ Props y datos mostrados correctamente
- ✅ Clases CSS aplicadas
```

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Solo unit tests
npm test -- __tests__/lib

# Solo component tests
npm test -- __tests__/components

# Coverage
npm test -- --coverage
```

## 📊 Conceptos Clave

### Client-Side Rendering (CSR)
```typescript
'use client';

function CSRPage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{/* render */}</div>;
}
```

**✅ Pros:**
- Alta interactividad
- Reduce carga del servidor

**❌ Contras:**
- Malo para SEO
- Tiempo de carga lento
- Bundle grande de JS

### Server-Side Rendering (SSR)
```typescript
async function SSRPage() {
  const data = await getRestaurants();
  return <div>{/* render */}</div>;
}
```

**✅ Pros:**
- Bueno para SEO
- HTML completo desde el inicio

**❌ Contras:**
- Alta carga del servidor
- Todo el código React al cliente

### React Server Components (RSC)
```typescript
async function RSCPage() {
  const data = await db.query('SELECT * FROM restaurants');
  // ✅ Puedes usar secrets aquí de forma segura
  const apiKey = process.env.SECRET_KEY;
  
  return <div>{/* render */}</div>;
}
```

**✅ Pros:**
- Excelente para SEO
- Bundle de JS mínimo
- Acceso directo a DB
- Secrets seguros

**❌ Contras:**
- No puedes usar hooks
- No puedes usar event handlers

### Server Actions
```typescript
// actions.ts
'use server';

export async function createRestaurant(formData: FormData) {
  // ✅ Este código SOLO se ejecuta en el servidor
  const data = await db.insert(...);
  revalidatePath('/restaurants');
  return { success: true };
}

// Component.tsx
'use client';

function Form() {
  return <form action={createRestaurant}>...</form>;
}
```

**✅ Pros:**
- No necesitas API routes
- Type-safe por defecto
- Progressive Enhancement
- Revalidación integrada

## 🎯 Recomendaciones 2025

### Patrón Recomendado

1. **Usa RSC por defecto** para la mayoría de componentes
2. **Client Components** solo cuando necesites:
   - useState, useEffect, etc.
   - Event handlers (onClick, onChange)
   - Browser APIs (window, localStorage)
   
3. **Server Actions** para mutations:
   - Crear, actualizar, eliminar datos
   - Validaciones del servidor
   - Integraciones con APIs externas

4. **CSR** solo para:
   - Apps privadas sin necesidad de SEO
   - Dashboards altamente interactivos

### Ejemplo de Composición

```typescript
// Layout.tsx - Server Component
async function Layout() {
  const data = await getData(); // RSC
  
  return (
    <div>
      <Header data={data} /> {/* Server Component */}
      <InteractiveWidget /> {/* Client Component */}
    </div>
  );
}

// InteractiveWidget.tsx
'use client';

function InteractiveWidget() {
  const [state, setState] = useState();
  // Interactividad aquí
}
```

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 👨‍💻 Para la Conferencia

### Demostración en Vivo

1. **Mostrar página principal** - Explicar conceptos
2. **Demo CSR** - Ver código fuente vacío
3. **Demo SSR** - Ver código fuente con datos
4. **Demo RSC** - Mostrar Suspense en acción
5. **Demo Server Actions** - Crear un restaurante
6. **Comparación** - Tabla comparativa
7. **Tests** - Ejecutar `npm test` en vivo

### Puntos Clave a Mencionar

- RSC no es lo mismo que SSR
- El código de RSC nunca llega al cliente
- Server Actions eliminan la necesidad de API routes
- Next.js 14+ usa RSC por defecto
- El futuro de React es server-first

## 🐛 Troubleshooting

### Error: "You're importing a component that needs useState"
**Solución:** Agrega `'use client'` al inicio del archivo

### Error: "Cannot use async component"
**Solución:** Los async components solo funcionan en Server Components (sin 'use client')

### Tests fallan con "Cannot find module '@/...'"
**Solución:** Verifica que `jest.config.js` tenga el moduleNameMapper correcto

## 📄 Licencia

MIT

---

**Creado para MedellinJS Conference 2025** 🇨🇴
**¡Disfruta la conferencia!** 🚀
