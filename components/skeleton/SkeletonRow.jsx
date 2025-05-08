// src/components/skeleton/SkeletonRow.jsx
export function SkeletonRow() {
    return (
      <tr className="animate-pulse">
        <td className="py-2 px-4"><div className="h-4 bg-gray-200 rounded w-3/4" /></td>
        <td className="py-2 px-4"><div className="h-4 bg-gray-200 rounded w-1/2" /></td>
        <td className="py-2 px-4"><div className="h-4 bg-gray-200 rounded w-1/3" /></td>
      </tr>
    );
  }
  