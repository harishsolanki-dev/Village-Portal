// "use client";

// import {
//   MoreHorizontal,
//   Pencil,
//   Trash2,
//   Eye,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Category } from "./types/category.types";

// interface CategoryTableProps {
//   categories: Category[];
//   onEdit: (category: Category) => void;
//   onDelete: (category: Category) => void;
// }

// export function CategoryTable({
//   categories,
//   onEdit,
//   onDelete,
// }: CategoryTableProps) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-[#e7e5dc] bg-white shadow-sm">
//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#FAFAF7]">
//               <TableHead className="pl-6">Category</TableHead>
//               <TableHead>Slug</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Order</TableHead>
//               <TableHead>Updated</TableHead>
//               <TableHead className="pr-6 text-right">
//                 Actions
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {categories.length === 0 ? (
//               <TableRow>
//                 <TableCell
//                   colSpan={6}
//                   className="h-32 text-center text-[#77776b]"
//                 >
//                   No categories found.
//                 </TableCell>
//               </TableRow>
//             ) : (
//               categories.map((category) => (
//                 <TableRow
//                   key={category.id}
//                   className="transition-colors hover:bg-[#FAFAF7]"
//                 >
//                   <TableCell className="pl-6">
//                     <div>
//                       <p className="font-semibold text-[#3F3F2F]">
//                         {category.name}
//                       </p>

//                       <p className="mt-1 max-w-xs truncate text-xs text-[#8a8a7d]">
//                         {category.description}
//                       </p>
//                     </div>
//                   </TableCell>

//                   <TableCell>
//                     <code className="rounded-md bg-[#f0efe8] px-2 py-1 text-xs text-[#555548]">
//                       {category.slug}
//                     </code>
//                   </TableCell>

//                   <TableCell>
//                     <Badge
//                       className={
//                         category.status === "ACTIVE"
//                           ? "border-0 bg-[#4D7C5A]/10 text-[#4D7C5A]"
//                           : "border-0 bg-[#D99A2B]/10 text-[#9a6910]"
//                       }
//                     >
//                       {category.status}
//                     </Badge>
//                   </TableCell>

//                   <TableCell className="font-medium text-[#555548]">
//                     {category.sortOrder}
//                   </TableCell>

//                   <TableCell className="text-sm text-[#77776b]">
//                     {new Date(
//                       category.updatedAt
//                     ).toLocaleDateString("en-IN")}
//                   </TableCell>

//                   <TableCell className="pr-6 text-right">
//                     <div className="flex justify-end gap-1">
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         title="View"
//                       >
//                         <Eye className="h-4 w-4" />
//                       </Button>

//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         title="Edit"
//                         onClick={() => onEdit(category)}
//                       >
//                         <Pencil className="h-4 w-4" />
//                       </Button>

//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         title="Delete"
//                         className="text-red-600 hover:bg-red-50 hover:text-red-700"
//                         onClick={() => onDelete(category)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { Category } from "./types/category.types";

// interface CategoryTableProps {
//   categories: Category[];

//   onEdit: (category: Category) => void;

//   onDelete: (category: Category) => void;

//   onRestore?: (category: Category) => void;

//   restoringId?: string | null;

//   showRestore?: boolean;
// }

// export function CategoryTable({
//   categories,
//   onEdit,
//   onDelete,
//   onRestore,
//   restoringId,
//   showRestore = false,
// }: CategoryTableProps) {
//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="w-full min-w-[850px] border-collapse">
//         <thead>
//           <tr
//             className="
//               border-y
//               border-[#ECE9E0]
//               bg-[#FAF9F5]
//             "
//           >
//             <th
//               className="
//                 px-6
//                 py-3.5
//                 text-left
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Category
//             </th>

//             <th
//               className="
//                 px-4
//                 py-3.5
//                 text-left
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Slug
//             </th>

//             <th
//               className="
//                 px-4
//                 py-3.5
//                 text-left
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Description
//             </th>

//             <th
//               className="
//                 px-4
//                 py-3.5
//                 text-left
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Status
//             </th>

//             <th
//               className="
//                 px-4
//                 py-3.5
//                 text-center
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Order
//             </th>

//             <th
//               className="
//                 px-6
//                 py-3.5
//                 text-right
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-wide
//                 text-[#858477]
//               "
//             >
//               Actions
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           {categories.map((category) => {
//             const isRestoring =
//               restoringId === category.id;

//             return (
//               <tr
//                 key={category.id}
//                 className="
//                   group
//                   border-b
//                   border-[#F0EEE8]
//                   transition-colors
//                   hover:bg-[#FCFCF9]
//                 "
//               >
//                 {/* Category */}
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     {/* Icon */}
//                     <div
//                       className="
//                         flex
//                         h-10
//                         w-10
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-xl
//                         bg-[#F1F5EF]
//                         text-[#4D7C5A]
//                       "
//                     >
//                       {category.icon ? (
//                         <span className="text-sm">
//                           {category.icon}
//                         </span>
//                       ) : (
//                         <span className="text-sm font-bold">
//                           {category.name
//                             .charAt(0)
//                             .toUpperCase()}
//                         </span>
//                       )}
//                     </div>

//                     <div className="min-w-0">
//                       <p
//                         className="
//                           truncate
//                           text-sm
//                           font-bold
//                           text-[#292A20]
//                         "
//                       >
//                         {category.name}
//                       </p>

//                       <p
//                         className="
//                           mt-0.5
//                           text-xs
//                           text-[#9A998E]
//                         "
//                       >
//                         ID: {category.id.slice(0, 8)}...
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Slug */}
//                 <td className="px-4 py-4">
//                   <code
//                     className="
//                       rounded-md
//                       bg-[#F5F3ED]
//                       px-2
//                       py-1
//                       text-xs
//                       font-medium
//                       text-[#666559]
//                     "
//                   >
//                     /{category.slug}
//                   </code>
//                 </td>

//                 {/* Description */}
//                 <td className="max-w-[320px] px-4 py-4">
//                   <p
//                     className="
//                       truncate
//                       text-sm
//                       text-[#77766B]
//                     "
//                     title={
//                       category.description ||
//                       "No description"
//                     }
//                   >
//                     {category.description ||
//                       "No description"}
//                   </p>
//                 </td>

//                 {/* Status */}
//                 <td className="px-4 py-4">
//                   <span
//                     className={`
//                       inline-flex
//                       items-center
//                       gap-1.5
//                       rounded-full
//                       px-2.5
//                       py-1
//                       text-xs
//                       font-bold
//                       ${
//                         category.status === "ACTIVE"
//                           ? "bg-[#EAF5EC] text-[#3D7650]"
//                           : "bg-[#F3F1EA] text-[#77766B]"
//                       }
//                     `}
//                   >
//                     <span
//                       className={`
//                         h-1.5
//                         w-1.5
//                         rounded-full
//                         ${
//                           category.status ===
//                           "ACTIVE"
//                             ? "bg-[#4D7C5A]"
//                             : "bg-[#9A988C]"
//                         }
//                       `}
//                     />

//                     {category.status}
//                   </span>
//                 </td>

//                 {/* Sort order */}
//                 <td className="px-4 py-4 text-center">
//                   <span
//                     className="
//                       inline-flex
//                       h-7
//                       min-w-7
//                       items-center
//                       justify-center
//                       rounded-lg
//                       bg-[#F5F3ED]
//                       px-2
//                       text-xs
//                       font-bold
//                       text-[#666559]
//                     "
//                   >
//                     {category.sortOrder}
//                   </span>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-6 py-4">
//                   <div className="flex items-center justify-end gap-2">
//                     {showRestore ? (
//                       <button
//                         type="button"
//                         disabled={isRestoring}
//                         onClick={() =>
//                           onRestore?.(category)
//                         }
//                         className="
//                           inline-flex
//                           items-center
//                           gap-2
//                           rounded-lg
//                           border
//                           border-[#CFE2D2]
//                           bg-[#F3FAF4]
//                           px-3
//                           py-2
//                           text-xs
//                           font-bold
//                           text-[#3D7650]
//                           transition-all
//                           hover:border-[#AFCDB4]
//                           hover:bg-[#EAF5EC]
//                           disabled:cursor-not-allowed
//                           disabled:opacity-60
//                         "
//                       >
//                         {isRestoring ? (
//                           <>
//                             <span
//                               className="
//                                 h-3.5
//                                 w-3.5
//                                 animate-spin
//                                 rounded-full
//                                 border-2
//                                 border-[#3D7650]/30
//                                 border-t-[#3D7650]
//                               "
//                             />

//                             Restoring...
//                           </>
//                         ) : (
//                           <>
//                             <span>↻</span>
//                             Restore
//                           </>
//                         )}
//                       </button>
//                     ) : (
//                       <>
//                         {/* Edit */}
//                         <button
//                           type="button"
//                           onClick={() =>
//                             onEdit(category)
//                           }
//                           className="
//                             rounded-lg
//                             border
//                             border-[#E1DED4]
//                             bg-white
//                             px-3
//                             py-2
//                             text-xs
//                             font-semibold
//                             text-[#555449]
//                             transition-all
//                             hover:border-[#C9C5B8]
//                             hover:bg-[#F8F7F3]
//                           "
//                         >
//                           Edit
//                         </button>

//                         {/* Delete */}
//                         <button
//                           type="button"
//                           onClick={() =>
//                             onDelete(category)
//                           }
//                           className="
//                             rounded-lg
//                             border
//                             border-[#F0D5D1]
//                             bg-white
//                             px-3
//                             py-2
//                             text-xs
//                             font-semibold
//                             text-[#B42318]
//                             transition-all
//                             hover:border-[#E5B8B2]
//                             hover:bg-[#FFF7F6]
//                           "
//                         >
//                           Delete
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }






"use client";

import {
  GraduationCap,
  Landmark,
  BookOpen,
  Briefcase,
  Bus,
  CalendarDays,
  CircleHelp,
  FileText,
  Gavel,
  HeartPulse,
  Leaf,
  MapPin,
  Newspaper,
  Shield,
  ShoppingBag,
  Sprout,
  Trash2,
  Pencil,
  RotateCcw,
} from "lucide-react";

import { Category } from "./types/category.types";

interface CategoryTableProps {
  categories: Category[];

  onEdit: (category: Category) => void;

  onDelete: (category: Category) => void;

  onRestore?: (category: Category) => void;

  restoringId?: string | null;

  showRestore?: boolean;
}

/**
 * Convert backend icon name into actual Lucide icon.
 */
function getCategoryIcon(icon?: string) {
  const iconMap: Record<string, React.ElementType> = {
    landmark: Landmark,
    "graduation-cap": GraduationCap,
    "book-open": BookOpen,
    briefcase: Briefcase,
    bus: Bus,
    calendar: CalendarDays,
    "file-text": FileText,
    gavel: Gavel,
    "heart-pulse": HeartPulse,
    leaf: Leaf,
    "map-pin": MapPin,
    newspaper: Newspaper,
    shield: Shield,
    "shopping-bag": ShoppingBag,
    sprout: Sprout,
  };

  return iconMap[icon || ""] || CircleHelp;
}

export function CategoryTable({
  categories,
  onEdit,
  onDelete,
  onRestore,
  restoringId,
  showRestore = false,
}: CategoryTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1050px] border-collapse">
        {/* Header */}
        <thead>
          <tr className="border-y border-[#ECE9E0] bg-[#FAF9F5]">
            <th className="w-[270px] px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Category
            </th>

            <th className="w-[190px] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Slug
            </th>

            <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Description
            </th>

            <th className="w-[130px] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Status
            </th>

            <th className="w-[90px] px-4 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Order
            </th>

            <th className="w-[170px] px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#858477]">
              Actions
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.icon);

            const isRestoring =
              restoringId === category.id;

            return (
              <tr
                key={category.id}
                className="
                  border-b
                  border-[#F0EEE8]
                  transition-colors
                  hover:bg-[#FCFCF9]
                "
              >
                {/* Category */}
                <td className="px-6 py-4">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F0F4EF]
                        text-[#4D7C5A]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Name */}
                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-sm
                          font-bold
                          text-[#292A20]
                        "
                        title={category.name}
                      >
                        {category.name}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          text-[#99978C]
                        "
                      >
                        ID: {category.id.slice(0, 8)}...
                      </p>
                    </div>
                  </div>
                </td>

                {/* Slug */}
                <td className="px-4 py-4">
                  <span
                    className="
                      inline-flex
                      max-w-[170px]
                      truncate
                      rounded-lg
                      bg-[#F5F3ED]
                      px-2.5
                      py-1.5
                      font-mono
                      text-xs
                      text-[#666559]
                    "
                    title={category.slug}
                  >
                    /{category.slug}
                  </span>
                </td>

                {/* Description */}
                <td className="px-4 py-4">
                  <p
                    className="
                      max-w-[360px]
                      truncate
                      text-sm
                      leading-6
                      text-[#77766B]
                    "
                    title={
                      category.description ||
                      "No description"
                    }
                  >
                    {category.description ||
                      "No description"}
                  </p>
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-2.5
                      py-1.5
                      text-[11px]
                      font-bold
                      ${
                        category.status === "ACTIVE"
                          ? "bg-[#EAF5EC] text-[#3D7650]"
                          : "bg-[#F3F1EA] text-[#77766B]"
                      }
                    `}
                  >
                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        ${
                          category.status === "ACTIVE"
                            ? "bg-[#4D7C5A]"
                            : "bg-[#99978C]"
                        }
                      `}
                    />

                    {category.status}
                  </span>
                </td>

                {/* Sort order */}
                <td className="px-4 py-4 text-center">
                  <span
                    className="
                      inline-flex
                      h-8
                      min-w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F5F3ED]
                      px-2
                      text-xs
                      font-bold
                      text-[#666559]
                    "
                  >
                    {category.sortOrder}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {showRestore ? (
                      <button
                        type="button"
                        disabled={isRestoring}
                        onClick={() =>
                          onRestore?.(category)
                        }
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-lg
                          border
                          border-[#CFE2D2]
                          bg-[#F3FAF4]
                          px-3
                          py-2
                          text-xs
                          font-semibold
                          text-[#3D7650]
                          transition
                          hover:bg-[#EAF5EC]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        <RotateCcw
                          size={14}
                          className={
                            isRestoring
                              ? "animate-spin"
                              : ""
                          }
                        />

                        {isRestoring
                          ? "Restoring..."
                          : "Restore"}
                      </button>
                    ) : (
                      <>
                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() =>
                            onEdit(category)
                          }
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-[#E1DED4]
                            bg-white
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-[#555449]
                            transition
                            hover:border-[#C9C5B8]
                            hover:bg-[#F8F7F3]
                          "
                        >
                          <Pencil size={13} />
                          Edit
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() =>
                            onDelete(category)
                          }
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-[#F0D5D1]
                            bg-white
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-[#B42318]
                            transition
                            hover:border-[#E5B8B2]
                            hover:bg-[#FFF7F6]
                          "
                        >
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}