// "use client";

// import {
//   FormEvent,
//   useEffect,
//   useState,
// } from "react";

// import {
//   Category,
//   CategoryFormData,
// } from "./types/category.types";

// interface CategoryFormProps {
//   category: Category | null;

//   loading: boolean;

//   onClose: () => void;

//   onSubmit: (
//     data: CategoryFormData
//   ) => Promise<void>;
// }

// const ICONS = [
//   {
//     value: "landmark",
//     label: "Government",
//     symbol: "🏛️",
//   },
//   {
//     value: "school",
//     label: "Education",
//     symbol: "🎓",
//   },
//   {
//     value: "briefcase",
//     label: "Jobs",
//     symbol: "💼",
//   },
//   {
//     value: "tractor",
//     label: "Agriculture",
//     symbol: "🚜",
//   },
//   {
//     value: "bus",
//     label: "Transport",
//     symbol: "🚌",
//   },
//   {
//     value: "calendar",
//     label: "Events",
//     symbol: "📅",
//   },
//   {
//     value: "megaphone",
//     label: "Announcement",
//     symbol: "📢",
//   },
//   {
//     value: "heart",
//     label: "Community",
//     symbol: "❤️",
//   },
// ];

// export function CategoryForm({
//   category,
//   loading,
//   onClose,
//   onSubmit,
// }: CategoryFormProps) {
//   const isEdit = Boolean(category);

//   const [name, setName] = useState("");

//   const [description, setDescription] =
//     useState("");

//   const [icon, setIcon] = useState(
//     "landmark"
//   );

//   const [errors, setErrors] = useState<{
//     name?: string;
//     description?: string;
//     icon?: string;
//     general?: string;
//   }>({});

//   useEffect(() => {
//     if (category) {
//       setName(category.name);
//       setDescription(
//         category.description || ""
//       );
//       setIcon(category.icon || "landmark");
//     } else {
//       setName("");
//       setDescription("");
//       setIcon("landmark");
//     }

//     setErrors({});
//   }, [category]);

//   function validate() {
//     const nextErrors: typeof errors = {};

//     const cleanName = name.trim();

//     if (!cleanName) {
//       nextErrors.name =
//         "Category name is required.";
//     } else if (cleanName.length < 2) {
//       nextErrors.name =
//         "Category name must be at least 2 characters.";
//     } else if (cleanName.length > 100) {
//       nextErrors.name =
//         "Category name cannot exceed 100 characters.";
//     }

//     if (description.trim().length > 500) {
//       nextErrors.description =
//         "Description cannot exceed 500 characters.";
//     }

//     if (!icon) {
//       nextErrors.icon =
//         "Please select an icon.";
//     }

//     setErrors(nextErrors);

//     return (
//       Object.keys(nextErrors).length === 0
//     );
//   }

//   async function handleSubmit(
//     event: FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault();

//     if (!validate()) {
//       return;
//     }

//     try {
//       setErrors({});

//       await onSubmit({
//         name: name.trim(),
//         description:
//           description.trim() || undefined,
//         icon,
//       });
//     } catch (error) {
//       setErrors({
//         general:
//           error instanceof Error
//             ? error.message
//             : `Failed to ${
//                 isEdit
//                   ? "update"
//                   : "create"
//               } category.`,
//       });
//     }
//   }

//   return (
//     <div
//       className="
//         fixed
//         inset-0
//         z-50
//         flex
//         items-center
//         justify-center
//         bg-black/40
//         p-4
//         backdrop-blur-sm
//       "
//       onMouseDown={(event) => {
//         if (
//           event.target === event.currentTarget &&
//           !loading
//         ) {
//           onClose();
//         }
//       }}
//     >
//       <div
//         className="
//           w-full
//           max-w-lg
//           overflow-hidden
//           rounded-2xl
//           border
//           border-[#E5E2D8]
//           bg-white
//           shadow-2xl
//         "
//       >
//         {/* Header */}
//         <div
//           className="
//             flex
//             items-start
//             justify-between
//             border-b
//             border-[#ECE9E0]
//             px-6
//             py-5
//           "
//         >
//           <div>
//             <h2 className="text-lg font-bold text-[#292A20]">
//               {isEdit
//                 ? "Edit Category"
//                 : "Create Category"}
//             </h2>

//             <p className="mt-1 text-sm text-[#88877C]">
//               {isEdit
//                 ? "Update category information."
//                 : "Add a new category to organize village content."}
//             </p>
//           </div>

//           <button
//             type="button"
//             disabled={loading}
//             onClick={onClose}
//             className="
//               flex
//               h-8
//               w-8
//               items-center
//               justify-center
//               rounded-lg
//               text-lg
//               text-[#77766B]
//               transition
//               hover:bg-[#F4F2EA]
//               hover:text-[#292A20]
//             "
//           >
//             ×
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5 p-6"
//         >
//           {/* General error */}
//           {errors.general && (
//             <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
//               <p className="text-sm font-medium text-red-700">
//                 {errors.general}
//               </p>
//             </div>
//           )}

//           {/* Name */}
//           <div>
//             <label
//               htmlFor="category-name"
//               className="mb-2 block text-sm font-semibold text-[#4E4D43]"
//             >
//               Category name
//               <span className="ml-1 text-red-500">
//                 *
//               </span>
//             </label>

//             <input
//               id="category-name"
//               value={name}
//               disabled={loading}
//               onChange={(event) => {
//                 setName(event.target.value);

//                 setErrors((current) => ({
//                   ...current,
//                   name: undefined,
//                 }));
//               }}
//               placeholder="e.g. Government"
//               maxLength={100}
//               className={`
//                 w-full
//                 rounded-xl
//                 border
//                 bg-[#FCFCFA]
//                 px-4
//                 py-3
//                 text-sm
//                 text-[#292A20]
//                 outline-none
//                 transition
//                 ${
//                   errors.name
//                     ? "border-red-400"
//                     : "border-[#E2DED3] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
//                 }
//               `}
//             />

//             {errors.name && (
//               <p className="mt-1.5 text-xs font-medium text-red-600">
//                 {errors.name}
//               </p>
//             )}
//           </div>

//           {/* Description */}
//           <div>
//             <div className="mb-2 flex items-center justify-between">
//               <label
//                 htmlFor="category-description"
//                 className="text-sm font-semibold text-[#4E4D43]"
//               >
//                 Description
//               </label>

//               <span className="text-xs text-[#99978B]">
//                 {description.length}/500
//               </span>
//             </div>

//             <textarea
//               id="category-description"
//               value={description}
//               disabled={loading}
//               onChange={(event) => {
//                 setDescription(
//                   event.target.value
//                 );

//                 setErrors((current) => ({
//                   ...current,
//                   description: undefined,
//                 }));
//               }}
//               placeholder="Describe what this category is used for..."
//               maxLength={500}
//               rows={4}
//               className={`
//                 w-full
//                 resize-none
//                 rounded-xl
//                 border
//                 bg-[#FCFCFA]
//                 px-4
//                 py-3
//                 text-sm
//                 text-[#292A20]
//                 outline-none
//                 transition
//                 ${
//                   errors.description
//                     ? "border-red-400"
//                     : "border-[#E2DED3] focus:border-[#4D7C5A] focus:ring-4 focus:ring-[#4D7C5A]/10"
//                 }
//               `}
//             />

//             {errors.description && (
//               <p className="mt-1.5 text-xs font-medium text-red-600">
//                 {errors.description}
//               </p>
//             )}
//           </div>

//           {/* Icon */}
//           <div>
//             <label className="mb-3 block text-sm font-semibold text-[#4E4D43]">
//               Category icon
//               <span className="ml-1 text-red-500">
//                 *
//               </span>
//             </label>

//             <div className="grid grid-cols-4 gap-2">
//               {ICONS.map((item) => {
//                 const selected =
//                   icon === item.value;

//                 return (
//                   <button
//                     key={item.value}
//                     type="button"
//                     disabled={loading}
//                     onClick={() => {
//                       setIcon(item.value);

//                       setErrors((current) => ({
//                         ...current,
//                         icon: undefined,
//                       }));
//                     }}
//                     className={`
//                       flex
//                       flex-col
//                       items-center
//                       gap-1.5
//                       rounded-xl
//                       border
//                       px-2
//                       py-3
//                       transition
//                       ${
//                         selected
//                           ? "border-[#4D7C5A] bg-[#F1F7F1] ring-2 ring-[#4D7C5A]/10"
//                           : "border-[#E5E2D8] bg-white hover:bg-[#F8F7F3]"
//                       }
//                     `}
//                   >
//                     <span className="text-xl">
//                       {item.symbol}
//                     </span>

//                     <span
//                       className={`
//                         text-[10px]
//                         font-semibold
//                         ${
//                           selected
//                             ? "text-[#3D7650]"
//                             : "text-[#77766B]"
//                         }
//                       `}
//                     >
//                       {item.label}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             {errors.icon && (
//               <p className="mt-1.5 text-xs font-medium text-red-600">
//                 {errors.icon}
//               </p>
//             )}
//           </div>

//           {/* Footer */}
//           <div
//             className="
//               flex
//               flex-col-reverse
//               gap-3
//               border-t
//               border-[#ECE9E0]
//               pt-5
//               sm:flex-row
//               sm:justify-end
//             "
//           >
//             <button
//               type="button"
//               disabled={loading}
//               onClick={onClose}
//               className="
//                 rounded-xl
//                 border
//                 border-[#DDD9CE]
//                 bg-white
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-semibold
//                 text-[#555449]
//                 transition
//                 hover:bg-[#F7F6F1]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-50
//               "
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-xl
//                 bg-[#3F3F2F]
//                 px-5
//                 py-2.5
//                 text-sm
//                 font-bold
//                 text-white
//                 transition
//                 hover:bg-[#343429]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//             >
//               {loading && (
//                 <span
//                   className="
//                     h-4
//                     w-4
//                     animate-spin
//                     rounded-full
//                     border-2
//                     border-white/30
//                     border-t-white
//                   "
//                 />
//               )}

//               {loading
//                 ? isEdit
//                   ? "Updating..."
//                   : "Creating..."
//                 : isEdit
//                   ? "Update Category"
//                   : "Create Category"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



// "use client";

// import {
//   ArrowLeft,
//   Check,
//   GraduationCap,
//   Landmark,
//   Loader2,
//   Save,
// } from "lucide-react";

// import { FormEvent, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import {
//   createCategory,
//   getCategoryById,
//   updateCategory,
// } from "@/src/services/category-api";

// interface CategoryFormProps {
//   mode: "create" | "edit";
//   categoryId?: string;
// }

// interface FormData {
//   name: string;
//   description: string;
//   icon: string;
// }

// interface FormErrors {
//   name?: string;
//   description?: string;
//   icon?: string;
// }

// export function CategoryForm({
//   mode,
//   categoryId,
// }: CategoryFormProps) {
//   const router = useRouter();

//   const isEdit = mode === "edit";

//   const [form, setForm] = useState<FormData>({
//     name: "",
//     description: "",
//     icon: "",
//   });

//   const [errors, setErrors] =
//     useState<FormErrors>({});

//   const [loading, setLoading] =
//     useState(isEdit);

//   const [submitting, setSubmitting] =
//     useState(false);

//   const [error, setError] =
//     useState<string | null>(null);

//   /**
//    * Load category for edit
//    */
//   useEffect(() => {
//     if (!isEdit || !categoryId) {
//       return;
//     }

//     async function loadCategory() {
//       try {
//         setLoading(true);
//         setError(null);

//         const response =
//           await getCategoryById(categoryId);

//         const category = response.data;

//         setForm({
//           name: category.name || "",
//           description:
//             category.description || "",
//           icon: category.icon || "",
//         });
//       } catch (error) {
//         setError(
//           error instanceof Error
//             ? error.message
//             : "Failed to load category."
//         );
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadCategory();
//   }, [isEdit, categoryId]);

//   /**
//    * Change input
//    */
//   function handleChange(
//     field: keyof FormData,
//     value: string
//   ) {
//     setForm((current) => ({
//       ...current,
//       [field]: value,
//     }));

//     setErrors((current) => ({
//       ...current,
//       [field]: undefined,
//     }));
//   }

//   /**
//    * Validate
//    */
//   function validate() {
//     const nextErrors: FormErrors = {};

//     const name = form.name.trim();

//     if (!name) {
//       nextErrors.name =
//         "Category name is required.";
//     } else if (name.length < 2) {
//       nextErrors.name =
//         "Category name must contain at least 2 characters.";
//     } else if (name.length > 100) {
//       nextErrors.name =
//         "Category name cannot exceed 100 characters.";
//     }

//     if (form.description.length > 500) {
//       nextErrors.description =
//         "Description cannot exceed 500 characters.";
//     }

//     if (form.icon.trim().length > 100) {
//       nextErrors.icon =
//         "Icon name cannot exceed 100 characters.";
//     }

//     setErrors(nextErrors);

//     return Object.keys(nextErrors).length === 0;
//   }

//   /**
//    * Submit
//    */
//   async function handleSubmit(
//     event: FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault();

//     setError(null);

//     if (!validate()) {
//       return;
//     }

//     try {
//       setSubmitting(true);

//       const payload = {
//         name: form.name.trim(),
//         description:
//           form.description.trim() || undefined,
//         icon: form.icon.trim() || undefined,
//       };

//       if (isEdit && categoryId) {
//         await updateCategory(
//           categoryId,
//           payload
//         );
//       } else {
//         await createCategory(payload);
//       }

//       router.push("/admin/categories");

//       router.refresh();
//     } catch (error) {
//       setError(
//         error instanceof Error
//           ? error.message
//           : isEdit
//             ? "Failed to update category."
//             : "Failed to create category."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   /**
//    * Loading state
//    */
//   if (loading) {
//     return (
//       <main className="min-h-screen bg-[#FAFAF7]">
//         <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
//           <div className="flex min-h-[500px] items-center justify-center">
//             <div className="text-center">
//               <Loader2
//                 className="mx-auto animate-spin text-[#4D7C5A]"
//                 size={30}
//               />

//               <p className="mt-3 text-sm text-[#77766B]">
//                 Loading category...
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#FAFAF7]">
//       <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
//         {/* Back */}
//         <button
//           type="button"
//           onClick={() =>
//             router.push("/admin/categories")
//           }
//           className="
//             mb-6
//             inline-flex
//             items-center
//             gap-2
//             text-sm
//             font-semibold
//             text-[#77766B]
//             transition
//             hover:text-[#3F3F2F]
//           "
//         >
//           <ArrowLeft size={16} />

//           Back to categories
//         </button>

//         {/* Header */}
//         <div className="mb-6">
//           <p className="mb-2 text-sm font-semibold text-[#4D7C5A]">
//             Content Management
//           </p>

//           <h1
//             className="
//               text-2xl
//               font-black
//               tracking-tight
//               text-[#292A20]
//               sm:text-3xl
//             "
//           >
//             {isEdit
//               ? "Edit Category"
//               : "Create Category"}
//           </h1>

//           <p className="mt-2 text-sm leading-6 text-[#77766B]">
//             {isEdit
//               ? "Update the category information used to organize village content."
//               : "Create a category for organizing village news, articles and community content."}
//           </p>
//         </div>

//         {/* Error */}
//         {error && (
//           <div
//             className="
//               mb-5
//               rounded-xl
//               border
//               border-red-200
//               bg-red-50
//               px-4
//               py-3
//               text-sm
//               font-medium
//               text-red-700
//             "
//           >
//             {error}
//           </div>
//         )}

//         {/* Form Card */}
//         <form
//           onSubmit={handleSubmit}
//           className="
//             overflow-hidden
//             rounded-2xl
//             border
//             border-[#E5E2D8]
//             bg-white
//             shadow-sm
//           "
//         >
//           {/* Form Header */}
//           <div className="border-b border-[#ECE9E0] px-5 py-5 sm:px-7">
//             <div className="flex items-center gap-3">
//               <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-xl
//                   bg-[#F0F4EF]
//                   text-[#4D7C5A]
//                 "
//               >
//                 {isEdit ? (
//                   <Save size={19} />
//                 ) : (
//                   <Check size={19} />
//                 )}
//               </div>

//               <div>
//                 <h2 className="text-sm font-bold text-[#292A20]">
//                   Category Information
//                 </h2>

//                 <p className="mt-0.5 text-xs text-[#99978C]">
//                   Enter the basic information below.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Fields */}
//           <div className="space-y-6 px-5 py-6 sm:px-7">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="category-name"
//                 className="
//                   mb-2
//                   block
//                   text-sm
//                   font-semibold
//                   text-[#4E4D43]
//                 "
//               >
//                 Category name
//                 <span className="ml-1 text-red-500">
//                   *
//                 </span>
//               </label>

//               <input
//                 id="category-name"
//                 value={form.name}
//                 onChange={(event) =>
//                   handleChange(
//                     "name",
//                     event.target.value
//                   )
//                 }
//                 placeholder="e.g. Government"
//                 maxLength={100}
//                 className={`
//                   w-full
//                   rounded-xl
//                   border
//                   bg-[#FCFCFA]
//                   px-4
//                   py-3
//                   text-sm
//                   text-[#292A20]
//                   outline-none
//                   transition
//                   placeholder:text-[#AAA99E]
//                   ${
//                     errors.name
//                       ? "border-red-300 focus:ring-4 focus:ring-red-100"
//                       : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:bg-white focus:ring-4 focus:ring-[#4D7C5A]/10"
//                   }
//                 `}
//               />

//               {errors.name && (
//                 <p className="mt-2 text-xs font-medium text-red-600">
//                   {errors.name}
//                 </p>
//               )}
//             </div>

//             {/* Description */}
//             <div>
//               <div className="mb-2 flex items-center justify-between">
//                 <label
//                   htmlFor="category-description"
//                   className="
//                     text-sm
//                     font-semibold
//                     text-[#4E4D43]
//                   "
//                 >
//                   Description
//                 </label>

//                 <span className="text-xs text-[#AAA99E]">
//                   {form.description.length}/500
//                 </span>
//               </div>

//               <textarea
//                 id="category-description"
//                 value={form.description}
//                 onChange={(event) =>
//                   handleChange(
//                     "description",
//                     event.target.value
//                   )
//                 }
//                 placeholder="Describe what type of content belongs to this category..."
//                 maxLength={500}
//                 rows={5}
//                 className={`
//                   w-full
//                   resize-none
//                   rounded-xl
//                   border
//                   bg-[#FCFCFA]
//                   px-4
//                   py-3
//                   text-sm
//                   leading-6
//                   text-[#292A20]
//                   outline-none
//                   transition
//                   placeholder:text-[#AAA99E]
//                   ${
//                     errors.description
//                       ? "border-red-300"
//                       : "border-[#E5E2D8] focus:border-[#4D7C5A] focus:bg-white focus:ring-4 focus:ring-[#4D7C5A]/10"
//                   }
//                 `}
//               />

//               {errors.description && (
//                 <p className="mt-2 text-xs font-medium text-red-600">
//                   {errors.description}
//                 </p>
//               )}
//             </div>

//             {/* Icon */}
//             <div>
//               <label
//                 htmlFor="category-icon"
//                 className="
//                   mb-2
//                   block
//                   text-sm
//                   font-semibold
//                   text-[#4E4D43]
//                 "
//               >
//                 Icon
//               </label>

//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <input
//                   id="category-icon"
//                   value={form.icon}
//                   onChange={(event) =>
//                     handleChange(
//                       "icon",
//                       event.target.value
//                     )
//                   }
//                   placeholder="e.g. landmark"
//                   maxLength={100}
//                   className="
//                     flex-1
//                     rounded-xl
//                     border
//                     border-[#E5E2D8]
//                     bg-[#FCFCFA]
//                     px-4
//                     py-3
//                     text-sm
//                     text-[#292A20]
//                     outline-none
//                     transition
//                     placeholder:text-[#AAA99E]
//                     focus:border-[#4D7C5A]
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-[#4D7C5A]/10
//                   "
//                 />

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-[#E5E2D8]
//                     bg-[#F7F6F1]
//                     px-4
//                     py-3
//                     text-xs
//                     text-[#77766B]
//                   "
//                 >
//                   {form.icon ===
//                   "graduation-cap" ? (
//                     <GraduationCap
//                       size={18}
//                     />
//                   ) : (
//                     <Landmark size={18} />
//                   )}

//                   <span>
//                     {form.icon || "Preview"}
//                   </span>
//                 </div>
//               </div>

//               <p className="mt-2 text-xs text-[#99978C]">
//                 Use a supported Lucide icon name such
//                 as landmark, graduation-cap,
//                 newspaper, bus or briefcase.
//               </p>

//               {errors.icon && (
//                 <p className="mt-2 text-xs font-medium text-red-600">
//                   {errors.icon}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Footer */}
//           <div
//             className="
//               flex
//               flex-col-reverse
//               gap-3
//               border-t
//               border-[#ECE9E0]
//               bg-[#FCFCFA]
//               px-5
//               py-4
//               sm:flex-row
//               sm:justify-end
//               sm:px-7
//             "
//           >
//             <button
//               type="button"
//               onClick={() =>
//                 router.push("/admin/categories")
//               }
//               disabled={submitting}
//               className="
//                 rounded-xl
//                 border
//                 border-[#DDD9CE]
//                 bg-white
//                 px-5
//                 py-3
//                 text-sm
//                 font-semibold
//                 text-[#555449]
//                 transition
//                 hover:bg-[#F7F6F1]
//                 disabled:opacity-50
//               "
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-xl
//                 bg-[#3F3F2F]
//                 px-5
//                 py-3
//                 text-sm
//                 font-bold
//                 text-white
//                 transition
//                 hover:bg-[#343429]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-60
//               "
//             >
//               {submitting ? (
//                 <>
//                   <Loader2
//                     size={16}
//                     className="animate-spin"
//                   />

//                   {isEdit
//                     ? "Saving changes..."
//                     : "Creating..."}
//                 </>
//               ) : (
//                 <>
//                   {isEdit ? (
//                     <Save size={16} />
//                   ) : (
//                     <Check size={16} />
//                   )}

//                   {isEdit
//                     ? "Save Changes"
//                     : "Create Category"}
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }







"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  FolderTree,
  Loader2,
  Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import {
  createCategory,
} from "@/src/services/category-api";

interface CategoryFormProps {
  mode: "create" | "edit";
  initialData?: {
    id?: string;
    name: string;
    slug: string;
    description?: string;
    status: "ACTIVE" | "INACTIVE";
    sortOrder: number;
  };
}

export function CategoryForm({
  mode,
  initialData,
}: CategoryFormProps) {
  const router = useRouter();

  const [name, setName] = useState(initialData?.name ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [status, setStatus] = useState<"ACTIVE" | "INACTIVE">(
    initialData?.status ?? "ACTIVE"
  );
  const [sortOrder, setSortOrder] = useState(
    initialData?.sortOrder ?? 0
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEdit = mode === "edit";

  function handleNameChange(value: string) {
    setName(value);

    if (!isEdit) {
      setSlug(
        value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Category name is required.");
      return;
    }

    if (!slug.trim()) {
      setError("Slug is required.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload = {
        name: name.trim(),
        slug: slug.trim(),
        description: description.trim(),
        status,
        sortOrder,
      };

      if (isEdit && initialData?.id) {
        // updateCategory(initialData.id, payload);
      } else {
        await createCategory(payload);
      }

      router.push("/admin/categories");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <div className="mx-auto max-w-4xl space-y-6 p-4 sm:p-6 lg:p-8">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => router.back()}
              className="border-[#deddd3] bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <div>
              <p className="text-sm font-medium text-[#4D7C5A]">
                Categories
              </p>

              <h1 className="text-2xl font-bold text-[#2F2F25]">
                {isEdit
                  ? "Edit Category"
                  : "Create Category"}
              </h1>

              <p className="mt-1 text-sm text-[#77776B]">
                {isEdit
                  ? "Update category information."
                  : "Create a new content category for your village portal."}
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-[#e7e5dc] bg-white shadow-sm"
        >
          {/* Form header */}
          <div className="border-b border-[#ebe9e1] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4D7C5A]/10">
                <FolderTree className="h-5 w-5 text-[#4D7C5A]" />
              </div>

              <div>
                <h2 className="font-semibold text-[#3F3F2F]">
                  Category Information
                </h2>

                <p className="text-sm text-[#77776B]">
                  Enter the basic information for this category.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6">

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Name + Slug */}
            <div className="grid gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3F3F2F]">
                  Category Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <Input
                  value={name}
                  onChange={(e) =>
                    handleNameChange(e.target.value)
                  }
                  placeholder="e.g. Government Updates"
                  disabled={loading}
                  className="border-[#deddd3] bg-[#FAFAF7] focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3F3F2F]">
                  Slug
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <Input
                  value={slug}
                  onChange={(e) =>
                    setSlug(e.target.value)
                  }
                  placeholder="government-updates"
                  disabled={loading}
                  className="border-[#deddd3] bg-[#FAFAF7] font-mono text-sm focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#3F3F2F]">
                Description
              </label>

              <Textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe what type of content belongs to this category..."
                rows={4}
                disabled={loading}
                className="resize-none border-[#deddd3] bg-[#FAFAF7] focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
              />
            </div>

            {/* Status + Order */}
            <div className="grid gap-5 md:grid-cols-2">

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3F3F2F]">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value as
                        | "ACTIVE"
                        | "INACTIVE"
                    )
                  }
                  disabled={loading}
                  className="h-10 w-full rounded-md border border-[#deddd3] bg-[#FAFAF7] px-3 text-sm text-[#3F3F2F] outline-none focus:border-[#4D7C5A] focus:ring-2 focus:ring-[#4D7C5A]/20"
                >
                  <option value="ACTIVE">
                    Active
                  </option>

                  <option value="INACTIVE">
                    Inactive
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#3F3F2F]">
                  Display Order
                </label>

                <Input
                  type="number"
                  min={0}
                  value={sortOrder}
                  onChange={(e) =>
                    setSortOrder(
                      Number(e.target.value)
                    )
                  }
                  disabled={loading}
                  className="border-[#deddd3] bg-[#FAFAF7] focus-visible:border-[#4D7C5A] focus-visible:ring-[#4D7C5A]/20"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse gap-3 border-t border-[#ebe9e1] bg-[#FAFAF7]/60 px-6 py-4 sm:flex-row sm:justify-end">

            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() =>
                router.push("/admin/categories")
              }
              className="border-[#deddd3] bg-white"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#4D7C5A] text-white hover:bg-[#416B4D]"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {isEdit
                    ? "Update Category"
                    : "Create Category"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}