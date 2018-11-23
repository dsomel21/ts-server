import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity
} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
// BaseEntity gives you .crud abilities
export class User extends BaseEntity {
  // Instead of 1, 2, 3 => 34oijdsf9809fid, aosfd98u4h2ih
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 255 })
  firstName: string;

  @Column("text")
  password: string;

  // Automatically handles the id. because this function will run before inserting id
  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
