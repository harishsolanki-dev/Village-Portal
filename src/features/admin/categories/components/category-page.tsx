
// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";


// import { CategoryHeader } from "./category-header";
// import { CategoryStats } from "./category-stats";
// import { CategoryToolbar } from "./category-toolbar";
// import { CategoryTable } from "./category-table";
// import { Category } from "./types/category.types";
// import { getCategories } from "@/src/services/category-api";

// export function CategoryPage() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState<string | null>(null);

//   const [search, setSearch] = useState("");

//   const [page, setPage] = useState(0);

//   const [totalPages, setTotalPages] = useState(0);

//   const pageSize = 10;

//   const loadCategories = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await getCategories(
//         page,
//         pageSize
//       );

//       setCategories(response.data.content);

//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       const message =
//         error instanceof Error
//           ? error.message
//           : "Failed to load categories";

//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     loadCategories();
//   }, [loadCategories]);

//   const filteredCategories = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     if (!query) {
//       return categories;
//     }

//     return categories.filter(
//       (category) =>
//         category.name
//           .toLowerCase()
//           .includes(query) ||
//         category.slug
//           .toLowerCase()
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
//     // Open create dialog
//   }

//   function handleEdit(category: Category) {
//     // Open edit dialog
//     console.log("Edit:", category);
//   }

//   function handleDelete(category: Category) {
//     // Open delete dialog
//     console.log("Delete:", category);
//   }

//   function handleReset() {
//     setSearch("");
//     setPage(0);
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

//         {loading && (
//           <div className="rounded-2xl border bg-white p-10 text-center">
//             Loading categories...
//           </div>
//         )}

//         {error && (
//           <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
//             {error}

//             <button
//               onClick={loadCategories}
//               className="ml-3 font-semibold underline"
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {!loading && !error && (
//           <CategoryTable
//             categories={filteredCategories}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         )}

//         {!loading && !error && totalPages > 1 && (
//           <div className="flex items-center justify-between rounded-xl border bg-white p-4">
//             <button
//               disabled={page === 0}
//               onClick={() =>
//                 setPage((current) => current - 1)
//               }
//               className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               Previous
//             </button>

//             <span className="text-sm text-[#77776B]">
//               Page {page + 1} of {totalPages}
//             </span>

//             <button
//               disabled={page >= totalPages - 1}
//               onClick={() =>
//                 setPage((current) => current + 1)
//               }
//               className="rounded-lg border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
//             >
//               Next
//             </button>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }




// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";

// import { CategoryHeader } from "./category-header";
// import { CategoryStats } from "./category-stats";
// import { CategoryToolbar } from "./category-toolbar";
// import { CategoryTable } from "./category-table";

// import { Category } from "./types/category.types";

// import {
//   getCategories,
//   getDeletedCategories,
//   restoreCategory,
// } from "@/src/services/category-api";

// type CategoryView = "active" | "deleted";

// export function CategoryPage() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState<string | null>(null);

//   const [search, setSearch] = useState("");

//   const [page, setPage] = useState(0);

//   const [totalPages, setTotalPages] = useState(0);

//   const [totalElements, setTotalElements] = useState(0);

//   const [view, setView] = useState<CategoryView>("active");

//   const [restoringId, setRestoringId] = useState<string | null>(
//     null
//   );

//   const pageSize = 10;

//   /**
//    * Load active/deleted categories
//    */
//   const loadCategories = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response =
//         view === "deleted"
//           ? await getDeletedCategories(page, pageSize)
//           : await getCategories(page, pageSize);

//       setCategories(response.data.content);

//       setTotalPages(response.data.totalPages);

//       setTotalElements(response.data.totalElements);
//     } catch (error) {
//       const message =
//         error instanceof Error
//           ? error.message
//           : "Failed to load categories.";

//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   }, [page, view]);

//   useEffect(() => {
//     loadCategories();
//   }, [loadCategories]);

//   /**
//    * Search
//    */
//   const filteredCategories = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     if (!query) {
//       return categories;
//     }

//     return categories.filter((category) => {
//       return (
//         category.name.toLowerCase().includes(query) ||
//         category.slug.toLowerCase().includes(query) ||
//         category.description
//           ?.toLowerCase()
//           .includes(query)
//       );
//     });
//   }, [categories, search]);

//   /**
//    * Statistics
//    *
//    * NOTE:
//    * Since the backend pagination only returns the current page,
//    * these counts are page counts unless you create separate
//    * count APIs.
//    */
//   const activeCount =
//     view === "active"
//       ? categories.filter(
//           (category) => category.status === "ACTIVE"
//         ).length
//       : 0;

//   const inactiveCount =
//     view === "active"
//       ? categories.filter(
//           (category) => category.status === "INACTIVE"
//         ).length
//       : 0;

//   const deletedCount =
//     view === "deleted"
//       ? categories.length
//       : 0;

//   /**
//    * Create
//    */
//   function handleCreate() {
//     // Open create category dialog
//   }

//   /**
//    * Edit
//    */
//   function handleEdit(category: Category) {
//     // Open edit category dialog
//     console.log("Edit category:", category);
//   }

//   /**
//    * Delete
//    */
//   function handleDelete(category: Category) {
//     // Open delete confirmation dialog
//     console.log("Delete category:", category);
//   }

//   /**
//    * Restore category
//    */
//   async function handleRestore(category: Category) {
//     const confirmed = window.confirm(
//       `Restore "${category.name}"?\n\nThis category will become active again.`
//     );

//     if (!confirmed) {
//       return;
//     }

//     try {
//       setRestoringId(category.id);
//       setError(null);

//       const response = await restoreCategory(
//         category.id
//       );

//       /**
//        * Remove restored category immediately
//        * from deleted list.
//        */
//       setCategories((current) =>
//         current.filter(
//           (item) => item.id !== category.id
//         )
//       );

//       setTotalElements((current) =>
//         Math.max(current - 1, 0)
//       );

//       /**
//        * Optional success message.
//        * You can replace this later with Toast.
//        */
//       console.log(
//         response.message ||
//           "Category restored successfully."
//       );

//     } catch (error) {
//       const message =
//         error instanceof Error
//           ? error.message
//           : "Failed to restore category.";

//       setError(message);
//     } finally {
//       setRestoringId(null);
//     }
//   }

//   /**
//    * Switch active/deleted view
//    */
//   function handleViewChange(
//     nextView: CategoryView
//   ) {
//     setView(nextView);

//     setPage(0);

//     setSearch("");

//     setError(null);
//   }

//   /**
//    * Reset
//    */
//   function handleReset() {
//     setSearch("");
//     setPage(0);
//   }

//   /**
//    * Previous page
//    */
//   function handlePrevious() {
//     if (page === 0) {
//       return;
//     }

//     setPage((current) => current - 1);
//   }

//   /**
//    * Next page
//    */
//   function handleNext() {
//     if (page >= totalPages - 1) {
//       return;
//     }

//     setPage((current) => current + 1);
//   }

//   return (
//     <main className="min-h-screen bg-[#FAFAF7]">
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-[1600px]
//           space-y-6
//           p-4
//           sm:p-6
//           lg:p-8
//         "
//       >
//         {/* Header */}
//         <CategoryHeader
//           onCreate={handleCreate}
//         />

//         {/* Statistics */}
//         <CategoryStats
//           total={totalElements}
//           active={activeCount}
//           inactive={inactiveCount}
//           deleted={deletedCount}
//         />

//         {/* Main content card */}
//         <section
//           className="
//             overflow-hidden
//             rounded-2xl
//             border border-[#E5E2D8]
//             bg-white
//             shadow-sm
//           "
//         >
//           {/* View switcher */}
//           <div
//             className="
//               flex
//               flex-col
//               gap-4
//               border-b border-[#ECE9E0]
//               px-4
//               py-4
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//               sm:px-6
//             "
//           >
//             <div>
//               <h2
//                 className="
//                   text-base
//                   font-bold
//                   text-[#292A20]
//                 "
//               >
//                 {view === "active"
//                   ? "All Categories"
//                   : "Deleted Categories"}
//               </h2>

//               <p
//                 className="
//                   mt-1
//                   text-xs
//                   text-[#88877C]
//                 "
//               >
//                 {view === "active"
//                   ? "Manage your village content categories."
//                   : "Restore categories that were previously deleted."}
//               </p>
//             </div>

//             {/* Active / Deleted switch */}
//             <div
//               className="
//                 inline-flex
//                 w-full
//                 rounded-xl
//                 border border-[#E2DED3]
//                 bg-[#F7F6F1]
//                 p-1
//                 sm:w-auto
//               "
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   handleViewChange("active")
//                 }
//                 className={`
//                   flex-1
//                   rounded-lg
//                   px-4
//                   py-2
//                   text-sm
//                   font-semibold
//                   transition-all
//                   sm:flex-none
//                   ${
//                     view === "active"
//                       ? `
//                         bg-white
//                         text-[#3F3F2F]
//                         shadow-sm
//                       `
//                       : `
//                         text-[#77766B]
//                         hover:text-[#3F3F2F]
//                       `
//                   }
//                 `}
//               >
//                 All Categories
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   handleViewChange("deleted")
//                 }
//                 className={`
//                   flex-1
//                   rounded-lg
//                   px-4
//                   py-2
//                   text-sm
//                   font-semibold
//                   transition-all
//                   sm:flex-none
//                   ${
//                     view === "deleted"
//                       ? `
//                         bg-white
//                         text-[#9A3412]
//                         shadow-sm
//                       `
//                       : `
//                         text-[#77766B]
//                         hover:text-[#9A3412]
//                       `
//                   }
//                 `}
//               >
//                 Deleted
//               </button>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="px-4 pt-4 sm:px-6">
//             <CategoryToolbar
//               search={search}
//               onSearchChange={setSearch}
//               onReset={handleReset}
//             />
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="mx-4 mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 sm:mx-6">
//               <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="text-sm font-medium text-red-700">
//                   {error}
//                 </p>

//                 <button
//                   type="button"
//                   onClick={loadCategories}
//                   className="
//                     w-fit
//                     text-sm
//                     font-semibold
//                     text-red-700
//                     underline
//                     underline-offset-2
//                     hover:text-red-900
//                   "
//                 >
//                   Try again
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Loading */}
//           {loading && (
//             <div className="px-4 py-16 sm:px-6">
//               <div className="flex flex-col items-center justify-center">
//                 <div
//                   className="
//                     h-8
//                     w-8
//                     animate-spin
//                     rounded-full
//                     border-2
//                     border-[#DCD9CE]
//                     border-t-[#4D7C5A]
//                   "
//                 />

//                 <p
//                   className="
//                     mt-4
//                     text-sm
//                     font-medium
//                     text-[#77766B]
//                   "
//                 >
//                   Loading categories...
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Table */}
//           {!loading && !error && (
//             <div className="mt-4">
//               <CategoryTable
//                 categories={filteredCategories}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onRestore={
//                   view === "deleted"
//                     ? handleRestore
//                     : undefined
//                 }
//                 restoringId={restoringId}
//                 showRestore={
//                   view === "deleted"
//                 }
//               />
//             </div>
//           )}

//           {/* Empty state */}
//           {!loading &&
//             !error &&
//             filteredCategories.length === 0 && (
//               <div className="px-6 py-16 text-center">
//                 <div
//                   className="
//                     mx-auto
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     bg-[#F3F1E9]
//                     text-xl
//                   "
//                 >
//                   {view === "deleted"
//                     ? "🗑️"
//                     : "📂"}
//                 </div>

//                 <h3
//                   className="
//                     mt-4
//                     text-base
//                     font-bold
//                     text-[#292A20]
//                   "
//                 >
//                   {search
//                     ? "No categories found"
//                     : view === "deleted"
//                       ? "No deleted categories"
//                       : "No categories yet"}
//                 </h3>

//                 <p
//                   className="
//                     mx-auto
//                     mt-2
//                     max-w-md
//                     text-sm
//                     leading-6
//                     text-[#88877C]
//                   "
//                 >
//                   {search
//                     ? "Try changing your search term or reset the search."
//                     : view === "deleted"
//                       ? "Deleted categories will appear here when available."
//                       : "Create your first category to organize village content."}
//                 </p>

//                 {search && (
//                   <button
//                     type="button"
//                     onClick={handleReset}
//                     className="
//                       mt-4
//                       rounded-lg
//                       bg-[#3F3F2F]
//                       px-4
//                       py-2
//                       text-sm
//                       font-semibold
//                       text-white
//                       transition
//                       hover:bg-[#343429]
//                     "
//                   >
//                     Clear search
//                   </button>
//                 )}
//               </div>
//             )}

//           {/* Pagination */}
//           {!loading &&
//             !error &&
//             totalPages > 0 && (
//               <div
//                 className="
//                   flex
//                   flex-col
//                   gap-3
//                   border-t border-[#ECE9E0]
//                   px-4
//                   py-4
//                   sm:flex-row
//                   sm:items-center
//                   sm:justify-between
//                   sm:px-6
//                 "
//               >
//                 {/* Result information */}
//                 <p
//                   className="
//                     text-center
//                     text-xs
//                     text-[#88877C]
//                     sm:text-left
//                   "
//                 >
//                   Showing{" "}
//                   <span className="font-semibold text-[#555449]">
//                     {filteredCategories.length}
//                   </span>{" "}
//                   of{" "}
//                   <span className="font-semibold text-[#555449]">
//                     {totalElements}
//                   </span>{" "}
//                   categories
//                 </p>

//                 {/* Pagination controls */}
//                 <div className="flex items-center justify-center gap-2">
//                   <button
//                     type="button"
//                     disabled={page === 0}
//                     onClick={handlePrevious}
//                     className="
//                       rounded-lg
//                       border border-[#DDD9CE]
//                       bg-white
//                       px-3
//                       py-2
//                       text-sm
//                       font-semibold
//                       text-[#555449]
//                       transition
//                       hover:bg-[#F7F6F1]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-40
//                     "
//                   >
//                     ← Previous
//                   </button>

//                   <div
//                     className="
//                       min-w-[90px]
//                       rounded-lg
//                       bg-[#F4F2EA]
//                       px-3
//                       py-2
//                       text-center
//                       text-sm
//                       font-semibold
//                       text-[#555449]
//                     "
//                   >
//                     {page + 1} / {totalPages}
//                   </div>

//                   <button
//                     type="button"
//                     disabled={
//                       page >= totalPages - 1
//                     }
//                     onClick={handleNext}
//                     className="
//                       rounded-lg
//                       border border-[#DDD9CE]
//                       bg-white
//                       px-3
//                       py-2
//                       text-sm
//                       font-semibold
//                       text-[#555449]
//                       transition
//                       hover:bg-[#F7F6F1]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-40
//                     "
//                   >
//                     Next →
//                   </button>
//                 </div>
//               </div>
//             )}
//         </section>
//       </div>
//     </main>
//   );
// }










"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CategoryHeader } from "./category-header";
import { CategoryStats } from "./category-stats";
import { CategoryToolbar } from "./category-toolbar";
import { CategoryTable } from "./category-table";


import { Category } from "./types/category.types";
import { useRouter } from "next/navigation";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getDeletedCategories,
  restoreCategory,
  updateCategory,
} from "@/src/services/category-api";
import { CategoryForm } from "./category-form";

type CategoryView = "active" | "deleted";

export function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>(
    []
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null
  );
const router = useRouter();
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  const [totalElements, setTotalElements] = useState(0);

  const [view, setView] =
    useState<CategoryView>("active");

  /**
   * Create / Edit modal
   */
  const [showForm, setShowForm] = useState(false);

  const [editingCategory, setEditingCategory] =
    useState<Category | null>(null);

  const [formLoading, setFormLoading] =
    useState(false);

  const pageSize = 10;

  /**
   * Load categories
   */
  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response =
        view === "deleted"
          ? await getDeletedCategories(
              page,
              pageSize
            )
          : await getCategories(
              page,
              pageSize
            );

      setCategories(response.data.content);

      setTotalPages(
        response.data.totalPages
      );

      setTotalElements(
        response.data.totalElements
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to load categories."
      );
    } finally {
      setLoading(false);
    }
  }, [page, view]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  /**
   * Search
   */
  const filteredCategories = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) {
      return categories;
    }

    return categories.filter((category) => {
      return (
        category.name
          .toLowerCase()
          .includes(query) ||
        category.slug
          .toLowerCase()
          .includes(query) ||
        category.description
          ?.toLowerCase()
          .includes(query)
      );
    });
  }, [categories, search]);

  /**
   * Statistics
   */
  const activeCount = categories.filter(
    (category) =>
      category.status === "ACTIVE"
  ).length;

  const inactiveCount = categories.filter(
    (category) =>
      category.status === "INACTIVE"
  ).length;

  const deletedCount =
    view === "deleted"
      ? categories.length
      : 0;

function handleCreate() {
  router.push("/admin/categories/create");
}

function handleEdit(category: Category) {
  router.push(
    `/admin/categories/${category.id}/edit`
  );
}
  /**
   * CLOSE FORM
   */
  function handleCloseForm() {
    if (formLoading) {
      return;
    }

    setShowForm(false);
    setEditingCategory(null);
  }

  /**
   * SUBMIT CREATE / UPDATE
   */
  async function handleFormSubmit(
    data: {
      name: string;
      description?: string;
      icon?: string;
    }
  ) {
    try {
      setFormLoading(true);
      setError(null);

      if (editingCategory) {
        await updateCategory(
          editingCategory.id,
          data
        );
      } else {
        await createCategory(data);
      }

      setShowForm(false);
      setEditingCategory(null);

      await loadCategories();
    } catch (error) {
      throw error;
    } finally {
      setFormLoading(false);
    }
  }

  /**
   * DELETE
   */
  async function handleDelete(
    category: Category
  ) {
    const confirmed = window.confirm(
      `Delete "${category.name}"?\n\nYou can restore it later from Deleted Categories.`
    );

    if (!confirmed) {
      return;
    }

    try {
      setError(null);

      await deleteCategory(category.id);

      /**
       * If current page becomes empty,
       * move to previous page.
       */
      if (
        categories.length === 1 &&
        page > 0
      ) {
        setPage((current) => current - 1);
      } else {
        await loadCategories();
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to delete category."
      );
    }
  }

  /**
   * RESTORE
   */
  async function handleRestore(
    category: Category
  ) {
    const confirmed = window.confirm(
      `Restore "${category.name}"?\n\nThis category will become active again.`
    );

    if (!confirmed) {
      return;
    }

    try {
      setError(null);

      await restoreCategory(category.id);

      if (
        categories.length === 1 &&
        page > 0
      ) {
        setPage((current) => current - 1);
      } else {
        await loadCategories();
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to restore category."
      );
    }
  }

  /**
   * VIEW CHANGE
   */
  function handleViewChange(
    nextView: CategoryView
  ) {
    setView(nextView);
    setPage(0);
    setSearch("");
    setError(null);
  }

  /**
   * RESET
   */
  function handleReset() {
    setSearch("");
    setPage(0);
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">

        {/* Header */}
        <CategoryHeader
          onCreate={handleCreate}
        />

        {/* Stats */}
        <CategoryStats
          total={totalElements}
          active={activeCount}
          inactive={inactiveCount}
          deleted={deletedCount}
        />

        {/* Main card */}
        <section className="overflow-hidden rounded-2xl border border-[#E5E2D8] bg-white shadow-sm">

          {/* Top section */}
          <div className="flex flex-col gap-4 border-b border-[#ECE9E0] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div>
              <h2 className="text-base font-bold text-[#292A20]">
                {view === "active"
                  ? "All Categories"
                  : "Deleted Categories"}
              </h2>

              <p className="mt-1 text-xs text-[#88877C]">
                {view === "active"
                  ? "Manage your village content categories."
                  : "Restore categories that were previously deleted."}
              </p>
            </div>

            {/* View switch */}
            <div className="inline-flex w-full rounded-xl border border-[#E2DED3] bg-[#F7F6F1] p-1 sm:w-auto">

              <button
                type="button"
                onClick={() =>
                  handleViewChange("active")
                }
                className={`
                  flex-1 rounded-lg px-4 py-2
                  text-sm font-semibold transition
                  sm:flex-none
                  ${
                    view === "active"
                      ? "bg-white text-[#292A20] shadow-sm"
                      : "text-[#77766B] hover:text-[#292A20]"
                  }
                `}
              >
                All Categories
              </button>

              <button
                type="button"
                onClick={() =>
                  handleViewChange("deleted")
                }
                className={`
                  flex-1 rounded-lg px-4 py-2
                  text-sm font-semibold transition
                  sm:flex-none
                  ${
                    view === "deleted"
                      ? "bg-white text-[#9A3412] shadow-sm"
                      : "text-[#77766B] hover:text-[#9A3412]"
                  }
                `}
              >
                Deleted
              </button>

            </div>
          </div>

          {/* Toolbar */}
          <div className="px-5 pt-5 sm:px-6">
            <CategoryToolbar
              search={search}
              onSearchChange={setSearch}
              onReset={handleReset}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mx-5 mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 sm:mx-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-red-700">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={loadCategories}
                  className="text-sm font-bold text-red-700 underline"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">

                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#DCD9CE] border-t-[#4D7C5A]" />

                <p className="mt-4 text-sm font-medium text-[#77766B]">
                  Loading categories...
                </p>

              </div>
            </div>
          )}

          {/* Table */}
          {!loading &&
            !error &&
            filteredCategories.length > 0 && (
              <CategoryTable
                categories={filteredCategories}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onRestore={
                  view === "deleted"
                    ? handleRestore
                    : undefined
                }
                showRestore={
                  view === "deleted"
                }
              />
            )}

          {/* Empty */}
          {!loading &&
            !error &&
            filteredCategories.length === 0 && (
              <div className="px-6 py-16 text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F0E8] text-xl">
                  {view === "deleted"
                    ? "🗑️"
                    : "📂"}
                </div>

                <h3 className="mt-4 text-base font-bold text-[#292A20]">
                  {search
                    ? "No categories found"
                    : view === "deleted"
                      ? "No deleted categories"
                      : "No categories yet"}
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-[#88877C]">
                  {search
                    ? "Try another search term."
                    : view === "deleted"
                      ? "Deleted categories will appear here."
                      : "Create your first category to organize village content."}
                </p>

              </div>
            )}

          {/* Pagination */}
          {!loading &&
            !error &&
            totalPages > 0 && (
              <div className="flex flex-col gap-3 border-t border-[#ECE9E0] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                <p className="text-xs text-[#88877C]">
                  Showing{" "}
                  <span className="font-bold text-[#555449]">
                    {filteredCategories.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-[#555449]">
                    {totalElements}
                  </span>{" "}
                  categories
                </p>

                <div className="flex items-center justify-center gap-2">

                  <button
                    type="button"
                    disabled={page === 0}
                    onClick={() =>
                      setPage(
                        (current) =>
                          current - 1
                      )
                    }
                    className="rounded-lg border border-[#DDD9CE] px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  <span className="rounded-lg bg-[#F4F2EA] px-4 py-2 text-sm font-bold text-[#555449]">
                    {page + 1} / {totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={
                      page >= totalPages - 1
                    }
                    onClick={() =>
                      setPage(
                        (current) =>
                          current + 1
                      )
                    }
                    className="rounded-lg border border-[#DDD9CE] px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next →
                  </button>

                </div>
              </div>
            )}

        </section>
      </div>

      {/* Create / Edit modal */}
      {showForm && (
        <CategoryForm
          category={editingCategory}
          loading={formLoading}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </main>
  );
}