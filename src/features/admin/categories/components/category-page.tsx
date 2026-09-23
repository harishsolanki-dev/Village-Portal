"use client";

import { useMemo, useState } from "react";


import { CategoryHeader } from "./category-header";
import { CategoryStats } from "./category-stats";
import { CategoryToolbar } from "./category-toolbar";
import { CategoryTable } from "./category-table";
import { Category } from "./types/category.types";
import { categoryMockData } from "./data/category.mock";

export function CategoryPage() {
  const [categories] = useState<Category[]>(
    categoryMockData
  );

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return categories;
    }

    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(query) ||
        category.slug.toLowerCase().includes(query) ||
        category.description
          ?.toLowerCase()
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
    setSelectedCategory(null);

    // Dialog will be connected here.
  }

  function handleEdit(category: Category) {
    setSelectedCategory(category);

    // Dialog will be connected here.
  }

  function handleDelete(category: Category) {
    console.log("Delete category:", category.id);

    // AlertDialog will be connected here.
  }

  function handleReset() {
    setSearch("");
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

        <CategoryTable
          categories={filteredCategories}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </main>
  );
}