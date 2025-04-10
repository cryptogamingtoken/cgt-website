export default function Card({ title, children, footer }) {
    return (
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        {title && <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>}
        <div className="text-gray-700">{children}</div>
        {footer && <div className="mt-4 border-t pt-2 text-sm text-gray-500">{footer}</div>}
      </div>
    );
  }
  