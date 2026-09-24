import { CategoryForm } from "@/src/features/admin/categories/components/category-form";

interface EditCategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const { id } = await params;

  return (
    <CategoryForm
      mode="edit"
      categoryId={id}
    />
  );
}