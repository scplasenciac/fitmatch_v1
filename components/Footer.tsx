import Link from 'next/link'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Tips saludables', href: '#tips' },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link href="/" className="text-xl font-bold text-primary-700">
            FitMatch
          </Link>
          <p className="mt-2 text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} FitMatch. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 