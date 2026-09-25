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






// "use client";

// import {
//   GraduationCap,
//   Landmark,
//   BookOpen,
//   Briefcase,
//   Bus,
//   CalendarDays,
//   CircleHelp,
//   FileText,
//   Gavel,
//   HeartPulse,
//   Leaf,
//   MapPin,
//   Newspaper,
//   Shield,
//   ShoppingBag,
//   Sprout,
//   Trash2,
//   Pencil,
//   RotateCcw,
// } from "lucide-react";

// import { Category } from "./types/category.types";

// interface CategoryTableProps {
//   categories: Category[];

//   onEdit: (category: Category) => void;

//   onDelete: (category: Category) => void;

//   onRestore?: (category: Category) => void;

//   restoringId?: string | null;

//   showRestore?: boolean;
// }

// /**
//  * Convert backend icon name into actual Lucide icon.
//  */
// function getCategoryIcon(icon?: string) {
//   const iconMap: Record<string, React.ElementType> = {
//     landmark: Landmark,
//     "graduation-cap": GraduationCap,
//     "book-open": BookOpen,
//     briefcase: Briefcase,
//     bus: Bus,
//     calendar: CalendarDays,
//     "file-text": FileText,
//     gavel: Gavel,
//     "heart-pulse": HeartPulse,
//     leaf: Leaf,
//     "map-pin": MapPin,
//     newspaper: Newspaper,
//     shield: Shield,
//     "shopping-bag": ShoppingBag,
//     sprout: Sprout,
//   };

//   return iconMap[icon || ""] || CircleHelp;
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
//       <table className="w-full min-w-[1050px] border-collapse">
//         {/* Header */}
//         <thead>
//           <tr className="border-y border-[#ECE9E0] bg-[#FAF9F5]">
//             <th className="w-[270px] px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Category
//             </th>

//             <th className="w-[190px] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Slug
//             </th>

//             <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Description
//             </th>

//             <th className="w-[130px] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Status
//             </th>

//             <th className="w-[90px] px-4 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Order
//             </th>

//             <th className="w-[170px] px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#858477]">
//               Actions
//             </th>
//           </tr>
//         </thead>

//         {/* Body */}
//         <tbody>
//           {categories.map((category) => {
//             const Icon = getCategoryIcon(category.icon);

//             const isRestoring =
//               restoringId === category.id;

//             return (
//               <tr
//                 key={category.id}
//                 className="
//                   border-b
//                   border-[#F0EEE8]
//                   transition-colors
//                   hover:bg-[#FCFCF9]
//                 "
//               >
//                 {/* Category */}
//                 <td className="px-6 py-4">
//                   <div className="flex min-w-0 items-center gap-3">
//                     {/* Icon */}
//                     <div
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-xl
//                         bg-[#F0F4EF]
//                         text-[#4D7C5A]
//                       "
//                     >
//                       <Icon
//                         size={20}
//                         strokeWidth={1.8}
//                       />
//                     </div>

//                     {/* Name */}
//                     <div className="min-w-0">
//                       <p
//                         className="
//                           truncate
//                           text-sm
//                           font-bold
//                           text-[#292A20]
//                         "
//                         title={category.name}
//                       >
//                         {category.name}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[11px]
//                           text-[#99978C]
//                         "
//                       >
//                         ID: {category.id.slice(0, 8)}...
//                       </p>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Slug */}
//                 <td className="px-4 py-4">
//                   <span
//                     className="
//                       inline-flex
//                       max-w-[170px]
//                       truncate
//                       rounded-lg
//                       bg-[#F5F3ED]
//                       px-2.5
//                       py-1.5
//                       font-mono
//                       text-xs
//                       text-[#666559]
//                     "
//                     title={category.slug}
//                   >
//                     /{category.slug}
//                   </span>
//                 </td>

//                 {/* Description */}
//                 <td className="px-4 py-4">
//                   <p
//                     className="
//                       max-w-[360px]
//                       truncate
//                       text-sm
//                       leading-6
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
//                       py-1.5
//                       text-[11px]
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
//                           category.status === "ACTIVE"
//                             ? "bg-[#4D7C5A]"
//                             : "bg-[#99978C]"
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
//                       h-8
//                       min-w-8
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
//                           gap-1.5
//                           rounded-lg
//                           border
//                           border-[#CFE2D2]
//                           bg-[#F3FAF4]
//                           px-3
//                           py-2
//                           text-xs
//                           font-semibold
//                           text-[#3D7650]
//                           transition
//                           hover:bg-[#EAF5EC]
//                           disabled:cursor-not-allowed
//                           disabled:opacity-60
//                         "
//                       >
//                         <RotateCcw
//                           size={14}
//                           className={
//                             isRestoring
//                               ? "animate-spin"
//                               : ""
//                           }
//                         />

//                         {isRestoring
//                           ? "Restoring..."
//                           : "Restore"}
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
//                             inline-flex
//                             items-center
//                             gap-1.5
//                             rounded-lg
//                             border
//                             border-[#E1DED4]
//                             bg-white
//                             px-3
//                             py-2
//                             text-xs
//                             font-semibold
//                             text-[#555449]
//                             transition
//                             hover:border-[#C9C5B8]
//                             hover:bg-[#F8F7F3]
//                           "
//                         >
//                           <Pencil size={13} />
//                           Edit
//                         </button>

//                         {/* Delete */}
//                         <button
//                           type="button"
//                           onClick={() =>
//                             onDelete(category)
//                           }
//                           className="
//                             inline-flex
//                             items-center
//                             gap-1.5
//                             rounded-lg
//                             border
//                             border-[#F0D5D1]
//                             bg-white
//                             px-3
//                             py-2
//                             text-xs
//                             font-semibold
//                             text-[#B42318]
//                             transition
//                             hover:border-[#E5B8B2]
//                             hover:bg-[#FFF7F6]
//                           "
//                         >
//                           <Trash2 size={13} />
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
  BookOpen,
  Briefcase,
  Bus,
  CalendarDays,
  CircleHelp,
  FileText,
  Gavel,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  MapPin,
  Newspaper,
  Pencil,
  RotateCcw,
  Shield,
  ShoppingBag,
  Sprout,
  Trash2,
  type LucideIcon,
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
 * Backend icon name -> Lucide icon
 */
function getCategoryIcon(icon?: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
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

function getInitial(name: string) {
  return name?.charAt(0)?.toUpperCase() || "?";
}

export function CategoryTable({
  categories,
  onEdit,
  onDelete,
  onRestore,
  restoringId,
  showRestore = false,
}: CategoryTableProps) {
  /**
   * Empty state
   */
  if (categories.length === 0) {
    return (
      <div className="rounded-2xl border border-[#E7E5DC] bg-white shadow-sm">
        <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F4EF]">
            {showRestore ? (
              <Trash2
                className="h-6 w-6 text-[#8A8A7D]"
                strokeWidth={1.7}
              />
            ) : (
              <FolderEmptyIcon />
            )}
          </div>

          <h3 className="mt-4 text-sm font-bold text-[#292A20]">
            {showRestore
              ? "No deleted categories"
              : "No categories found"}
          </h3>

          <p className="mt-1 max-w-sm text-sm leading-6 text-[#8A897E]">
            {showRestore
              ? "There are currently no deleted categories to restore."
              : "No categories match your current search or there are no categories yet."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 mb-5 w-full overflow-hidden rounded-2xl border border-[#E7E5DC] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Desktop / Tablet Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-[#E8E5DC] bg-[#FAF9F5]">
              <th
                scope="col"
                className="
                  w-[270px]
                  px-6
                  py-4
                  text-left
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Category
              </th>

              <th
                scope="col"
                className="
                  w-[190px]
                  px-4
                  py-4
                  text-left
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Slug
              </th>

              <th
                scope="col"
                className="
                  px-4
                  py-4
                  text-left
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Description
              </th>

              <th
                scope="col"
                className="
                  w-[130px]
                  px-4
                  py-4
                  text-left
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Status
              </th>

              <th
                scope="col"
                className="
                  w-[90px]
                  px-4
                  py-4
                  text-center
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Order
              </th>

              <th
                scope="col"
                className="
                  w-[180px]
                  px-6
                  py-4
                  text-right
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#858477]
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-[#EEECE5]">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category.icon);

              const isRestoring =
                restoringId === category.id;

              const isActive =
                category.status === "ACTIVE";

              return (
                <tr
                  key={category.id}
                  className="
                    group
                    transition-colors
                    duration-150
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
                          transition-transform
                          duration-200
                          group-hover:scale-105
                        "
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Name */}
                      <div className="min-w-0">
                        <p
                          title={category.name}
                          className="
                            truncate
                            text-sm
                            font-bold
                            text-[#292A20]
                          "
                        >
                          {category.name}
                        </p>

                        <p
                          title={category.id}
                          className="
                            mt-1
                            text-[11px]
                            text-[#9A998E]
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
                      title={category.slug}
                      className="
                        inline-flex
                        max-w-[170px]
                        truncate
                        rounded-lg
                        border
                        border-[#E9E6DC]
                        bg-[#F7F5EF]
                        px-2.5
                        py-1.5
                        font-mono
                        text-xs
                        text-[#666559]
                      "
                    >
                      /{category.slug}
                    </span>
                  </td>

                  {/* Description */}
                  <td className="px-4 py-4">
                    <p
                      title={
                        category.description ||
                        "No description"
                      }
                      className="
                        max-w-[360px]
                        truncate
                        text-sm
                        leading-6
                        text-[#77766B]
                      "
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
                          isActive
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
                            isActive
                              ? "bg-[#4D7C5A]"
                              : "bg-[#99978C]"
                          }
                        `}
                      />

                      {category.status}
                    </span>
                  </td>

                  {/* Order */}
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
                            h-9
                            items-center
                            gap-1.5
                            rounded-lg
                            border
                            border-[#CFE1D3]
                            bg-white
                            px-3
                            text-xs
                            font-semibold
                            text-[#3D7650]
                            transition-all
                            hover:border-[#4D7C5A]
                            hover:bg-[#F0F7F1]
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                          "
                        >
                          <RotateCcw
                            className={`
                              h-3.5
                              w-3.5
                              ${
                                isRestoring
                                  ? "animate-spin"
                                  : ""
                              }
                            `}
                            strokeWidth={1.8}
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
                            aria-label={`Edit ${category.name}`}
                            className="
                              inline-flex
                              h-9
                              items-center
                              gap-1.5
                              rounded-lg
                              border
                              border-[#DEDCD3]
                              bg-white
                              px-3
                              text-xs
                              font-semibold
                              text-[#4E4D43]
                              transition-all
                              hover:border-[#BEBBAF]
                              hover:bg-[#F7F6F1]
                            "
                          >
                            <Pencil
                              className="h-3.5 w-3.5"
                              strokeWidth={1.8}
                            />

                            Edit
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() =>
                              onDelete(category)
                            }
                            aria-label={`Delete ${category.name}`}
                            className="
                              inline-flex
                              h-9
                              items-center
                              gap-1.5
                              rounded-lg
                              border
                              border-[#F0CFCB]
                              bg-white
                              px-3
                              text-xs
                              font-semibold
                              text-[#B85450]
                              transition-all
                              hover:border-[#E5AAA5]
                              hover:bg-[#FFF7F6]
                            "
                          >
                            <Trash2
                              className="h-3.5 w-3.5"
                              strokeWidth={1.8}
                            />

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

      {/* Mobile helper */}
      <div className="border-t border-[#EEECE5] bg-[#FAF9F5] px-4 py-3 text-center text-xs text-[#99978C] sm:hidden">
        Swipe horizontally to view all columns
      </div>
    </div>
  );
}

/**
 * Small empty-state icon.
 */
function FolderEmptyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-[#4D7C5A]"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h3.1c.6 0 1.17.24 1.59.66l1.1 1.09h6.21a2.25 2.25 0 0 1 2.25 2.25v8.75a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5"
      />
    </svg>
  );
}



// "use client";

// import {
//   Edit3,
//   FolderTree,
//   MoreHorizontal,
//   Trash2,
//   Inbox,
// } from "lucide-react";

// import { Category } from "./types/category.types";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

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
//   if (categories.length === 0) {
//     return (
//       <div className="overflow-hidden rounded-2xl border border-[#e7e5dc] bg-white shadow-sm">
//         <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
//           <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4D7C5A]/10">
//             <Inbox className="h-7 w-7 text-[#4D7C5A]" />
//           </div>

//           <h3 className="text-base font-semibold text-[#3F3F2F]">
//             No categories found
//           </h3>

//           <p className="mt-1 max-w-md text-sm text-[#77776B]">
//             There are no categories matching your current search.
//             Try changing your search or create a new category.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-6  overflow-hidden rounded-2xl border border-[#e7e5dc] bg-white shadow-sm">
//       {/* Table Header */}
//       <div className="flex flex-col gap-1 border-b border-[#ebe9e1] px-5 py-4 sm:px-6">
//         <h2 className="text-base font-semibold text-[#3F3F2F]">
//           Categories
//         </h2>

//         <p className="text-sm text-[#77776B]">
//           Manage your village content categories.
//         </p>
//       </div>

//       {/* Responsive Table */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full min-w-[900px] border-collapse">
//           <thead>
//             <tr className="border-b border-[#ebe9e1] bg-[#FAFAF7]">
//               <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Category
//               </th>

//               <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Slug
//               </th>

//               <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Description
//               </th>

//               <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Status
//               </th>

//               <th className="px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Order
//               </th>

//               <th className="px-6 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-[#77776B]">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {categories.map((category) => (
//               <CategoryRow
//                 key={category.id}
//                 category={category}
//                 onEdit={onEdit}
//                 onDelete={onDelete}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer */}
//       {/* <div className="flex flex-col gap-2 border-t border-[#ebe9e1] bg-[#FAFAF7]/60 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
//         <p className="text-sm text-[#77776B]">
//           Showing{" "}
//           <span className="font-semibold text-[#3F3F2F]">
//             {categories.length}
//           </span>{" "}
//           {categories.length === 1 ? "category" : "categories"}
//         </p>
//       </div> */}
//     </div>
//   );
// }

// interface CategoryRowProps {
//   category: Category;
//   onEdit: (category: Category) => void;
//   onDelete: (category: Category) => void;
// }

// function CategoryRow({
//   category,
//   onEdit,
//   onDelete,
// }: CategoryRowProps) {
//   const isActive = category.status === "ACTIVE";

//   return (
//     <tr className="group border-b border-[#ebe9e1] last:border-b-0 transition-colors hover:bg-[#FAFAF7]/70">
//       {/* Category */}
//       <td className="px-6 py-4">
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4D7C5A]/10">
//             <FolderTree className="h-5 w-5 text-[#4D7C5A]" />
//           </div>

//           <div className="min-w-0">
//             <p className="max-w-[220px] truncate text-sm font-semibold text-[#2F2F25]">
//               {category.name}
//             </p>

//             <p className="mt-0.5 max-w-[220px] truncate text-xs text-[#99998D]">
//               ID: {category.id}
//             </p>
//           </div>
//         </div>
//       </td>

//       {/* Slug */}
//       <td className="px-6 py-4">
//         <span className="inline-flex max-w-[220px] items-center rounded-lg bg-[#F4F3ED] px-2.5 py-1 font-mono text-xs text-[#66665A]">
//           /{category.slug}
//         </span>
//       </td>

//       {/* Description */}
//       <td className="px-6 py-4">
//         <p
//           title={category.description || "No description"}
//           className="max-w-[320px] truncate text-sm text-[#66665A]"
//         >
//           {category.description || "No description"}
//         </p>
//       </td>

//       {/* Status */}
//       <td className="px-6 py-4">
//         {isActive ? (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF5ED] px-2.5 py-1 text-xs font-semibold text-[#39704A]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#4D7C5A]" />
//             Active
//           </span>
//         ) : (
//           <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F3EF] px-2.5 py-1 text-xs font-semibold text-[#77776B]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#99998D]" />
//             Inactive
//           </span>
//         )}
//       </td>

//       {/* Order */}
//       <td className="px-6 py-4 text-center">
//         <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-[#F4F3ED] px-2 text-sm font-semibold text-[#55554A]">
//           {category.sortOrder}
//         </span>
//       </td>

//       {/* Actions */}
//       <td className="px-6 py-4">
//         <div className="flex items-center justify-end gap-2">
//           {/* Desktop actions */}
//           <div className="hidden items-center gap-2 md:flex">
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => onEdit(category)}
//               className="h-9 border-[#deddd3] bg-white px-3 text-[#55554A] hover:border-[#4D7C5A]/40 hover:bg-[#4D7C5A]/5 hover:text-[#4D7C5A]"
//             >
//               <Edit3 className="mr-1.5 h-3.5 w-3.5" />
//               Edit
//             </Button>

//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => onDelete(category)}
//               className="h-9 border-red-200 bg-white px-3 text-red-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
//             >
//               <Trash2 className="mr-1.5 h-3.5 w-3.5" />
//               Delete
//             </Button>
//           </div>

//           {/* Mobile / compact actions */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 type="button"
//                 variant="outline"
//                 size="icon"
//                 className="h-9 w-9 border-[#deddd3] bg-white text-[#66665A] hover:bg-[#F4F3ED]"
//                 aria-label={`Actions for ${category.name}`}
//               >
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent
//               align="end"
//               className="w-40 border-[#e7e5dc]"
//             >
//               <DropdownMenuItem
//                 onClick={() => onEdit(category)}
//                 className="cursor-pointer"
//               >
//                 <Edit3 className="mr-2 h-4 w-4" />
//                 Edit
//               </DropdownMenuItem>

//               <DropdownMenuSeparator />

//               <DropdownMenuItem
//                 onClick={() => onDelete(category)}
//                 className="cursor-pointer text-red-600 focus:text-red-600"
//               >
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 Delete
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </td>
//     </tr>
//   );
// }