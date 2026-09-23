// "use client";

// import { useMemo, useState } from "react";


// import { CategoryHeader } from "./category-header";
// import { CategoryStats } from "./category-stats";
// import { CategoryToolbar } from "./category-toolbar";
// import { CategoryTable } from "./category-table";
// import { Category } from "./types/category.types";
// import { categoryMockData } from "./data/category.mock";

// export function CategoryPage() {
//   const [categories] = useState<Category[]>(
//     categoryMockData
//   );

//   const [search, setSearch] = useState("");

//   const [selectedCategory, setSelectedCategory] =
//     useState<Category | null>(null);

//   const filteredCategories = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     if (!query) {
//       return categories;
//     }

//     return categories.filter(
//       (category) =>
//         category.name.toLowerCase().includes(query) ||
//         category.slug.toLowerCase().includes(query) ||
//         category.description
//           ?.toLowerCase()
//           .includes(query)
//     );
//   }, [categories, search]);

//   const activeCount = categories.filter(
//     (category) => category.status === "ACTIVE"
//   ).length;

//   const inactiveCount = categories.filter(
//     (category) => category.status === "INACTIVE"
//   ).length;

//   function handleCreate() {
//     setSelectedCategory(null);

//     // Dialog will be connected here.
//   }

//   function handleEdit(category: Category) {
//     setSelectedCategory(category);

//     // Dialog will be connected here.
//   }

//   function handleDelete(category: Category) {
//     console.log("Delete category:", category.id);

//     // AlertDialog will be connected here.
//   }

//   function handleReset() {
//     setSearch("");
//   }

//   return (
//     <main className="min-h-screen bg-[#FAFAF7]">
//       <div className="mx-auto max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">

//         <CategoryHeader
//           onCreate={handleCreate}
//         />

//         <CategoryStats
//           total={categories.length}
//           active={activeCount}
//           inactive={inactiveCount}
//           deleted={0}
//         />

//         <CategoryToolbar
//           search={search}
//           onSearchChange={setSearch}
//           onReset={handleReset}
//         />

//         <CategoryTable
//           categories={filteredCategories}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />

//       </div>
//     </main>
//   );
// }

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";


import { CategoryHeader } from "./category-header";
import { CategoryStats } from "./category-stats";
import { CategoryToolbar } from "./category-toolbar";
import { CategoryTable } from "./category-table";
import { Category } from "./types/category.types";
import { getCategories } from "@/src/services/category-api";

export function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  const pageSize = 10;

  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getCategories(
        page,
        pageSize
      );

      setCategories(response.data.content);

      setTotalPages(response.data.totalPages);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to load categories";

      setError(message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return categories;
    }

    return categories.filter(
      (category) =>
        category.name
          .toLowerCase()
          .includes(query) ||
        category.slug
          .toLowerCase()
          .includes(query)
    );
  }, [categories, search]);

  const activeCount = categories.filter(
    (category) => category.status === "ACTIVE"
  ).length;

  const inactiveCount = categories.filter(
    (category) => category.status === "INACTIVE"
  ).length;

  function handleCreate() {
    // Open create dialog
  }

  function handleEdit(category: Category) {
    // Open edit dialog
    console.log("Edit:", category);
  }

  function handleDelete(category: Category) {
    // Open delete dialog
    console.log("Delete:", category);
  }

  function handleReset() {
    setSearch("");
    setPage(0);
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <div className="mx-auto max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">

        <CategoryHeader
          onCreate={handleCreate}
        />

        <CategoryStats
          total={categories.length}
          active={activeCount}
          inactive={inactiveCount}
          deleted={0}
        />

        <CategoryToolbar
          search={search}
          onSearchChange={setSearch}
          onReset={handleReset}
        />

        {loading && (
          <div className="rounded-2xl border bg-white p-10 text-center">
            Loading categories...
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
            {error}

            <button
              onClick={loadCategories}
              className="ml-3 font-semibold underline"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <CategoryTable
            categories={filteredCategories}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-between rounded-xl border bg-white p-4">
            <button
              disabled={page === 0}
              onClick={() =>
                setPage((current) => current - 1)
              }
              className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-[#77776B]">
              Page {page + 1} of {totalPages}
            </span>

            <button
              disabled={page >= totalPages - 1}
              onClick={() =>
                setPage((current) => current + 1)
              }
              className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </main>
  );
}