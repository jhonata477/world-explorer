export default function Card({ image, title, subtitle, description, footer }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover border-b border-slate-100 dark:border-slate-800"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {footer && (
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
          {footer}
        </div>
      )}
    </div>
  );
}