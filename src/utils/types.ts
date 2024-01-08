export type Data = {
  order_id: number;
  created_by: string;
  assigned_lab: string;
  order_status: string;
  created_date: string;
  delivery_date: string;
  patient_id: number;
  patient_name: string;
  date_of_birth: string;
  lab_information: string;
  action_allowed: {
    edit: boolean;
    view: boolean;
    delete: boolean;
  };
};

export type Order = "asc" | "desc";

export type SortableFields = Omit<Data, "action_allowed">;

export type HeadCell = {
  id: keyof Data;
  label: string;
  sortable?: boolean;
};
