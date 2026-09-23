"use client";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Category } from "./types/category.types";

interface CategoryTableProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

export function CategoryTable({
  categories,
  onEdit,
  onDelete,
}: CategoryTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e5dc] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#FAFAF7]">
              <TableHead className="pl-6">Category</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="pr-6 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-32 text-center text-[#77776b]"
                >
                  No categories found.
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category) => (
                <TableRow
                  key={category.id}
                  className="transition-colors hover:bg-[#FAFAF7]"
                >
                  <TableCell className="pl-6">
                    <div>
                      <p className="font-semibold text-[#3F3F2F]">
                        {category.name}
                      </p>

                      <p className="mt-1 max-w-xs truncate text-xs text-[#8a8a7d]">
                        {category.description}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    <code className="rounded-md bg-[#f0efe8] px-2 py-1 text-xs text-[#555548]">
                      {category.slug}
                    </code>
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={
                        category.status === "ACTIVE"
                          ? "border-0 bg-[#4D7C5A]/10 text-[#4D7C5A]"
                          : "border-0 bg-[#D99A2B]/10 text-[#9a6910]"
                      }
                    >
                      {category.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="font-medium text-[#555548]">
                    {category.sortOrder}
                  </TableCell>

                  <TableCell className="text-sm text-[#77776b]">
                    {new Date(
                      category.updatedAt
                    ).toLocaleDateString("en-IN")}
                  </TableCell>

                  <TableCell className="pr-6 text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        title="Edit"
                        onClick={() => onEdit(category)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        title="Delete"
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() => onDelete(category)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}