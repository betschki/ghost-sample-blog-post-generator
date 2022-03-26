export interface GhostJson {
  meta: MetaData;
  data: Data;
}

interface MetaData {
  exported_on: EpochTimeStamp;
  version: string;
}

interface Data {
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  mobiledoc: string;
  status: string;
  published_at: EpochTimeStamp;
  published_by: number;
  author_id: number;
  created_at: EpochTimeStamp;
  created_by: number;
}
